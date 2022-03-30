import config from 'config'
import client from './client'

export default client.create({ baseUrl: config.BACKEND_URL })
