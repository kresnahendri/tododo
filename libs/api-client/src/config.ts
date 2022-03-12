/* eslint-disable import/no-mutable-exports */
export let API_URL = ""

export const initApiClientConfig = (opts: { apiUrl: string }) => {
  API_URL = opts.apiUrl
}
