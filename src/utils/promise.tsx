export const handle = (promise: Promise<any>) =>
  promise
    .then((data: any) => [data, undefined])
    .catch((error: any) => {
      return Promise.resolve([undefined, error])
    })
