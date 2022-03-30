import fetch from 'isomorphic-fetch'
import { stringifyUrl } from 'query-string'

const parseErrorMessage = message => {
  if (!message.fields) return message
  return Object.values(message.fields)
    .map(m => m)
    .join(', ')
}

function Client(instanceConfig = {}) {
  this.defaults = instanceConfig
}

Client.prototype.request = function (
  url,
  { method, body, query = {}, ...customConfig } = {},
) {
  const headers = { 'Content-Type': 'application/json' }
  const config = {
    method: this.defaults.method || method,
    credentials: 'include',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }
  if (this.defaults.baseUrl) {
    url = `${this.defaults.baseUrl}${url}`
  }
  return fetch(stringifyUrl({ url, query }), config).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(parseErrorMessage(data))
    }
  })
}

for (const method of ['delete', 'get', 'head', 'options']) {
  // eslint-disable-next-line no-loop-func
  Client.prototype[method] = function (url, config = {}) {
    return this.request(url, {
      ...config,
      method: method,
    })
  }
}

for (const method of ['post', 'put', 'patch']) {
  // eslint-disable-next-line no-loop-func
  Client.prototype[method] = function (url, body, config = {}) {
    return this.request(url, {
      ...config,
      method: method,
      body,
    })
  }
}

function createInstance(instanceConfig) {
  const context = new Client(instanceConfig)
  const instance = bind(Client.prototype.request, context)
  extend(instance, Client.prototype, context)
  extend(instance, context)
  return instance
}

const client = createInstance()

client.create = function create(instanceConfig) {
  return createInstance({ ...client.defaults, ...instanceConfig })
}

function bind(fn, thisArg) {
  return function wrap(...args) {
    return fn.apply(thisArg, args)
  }
}

function extend(a, b, thisArg) {
  for (const [key, val] of Object.entries(b)) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg)
    } else {
      a[key] = val
    }
  }

  return a
}

export default client
