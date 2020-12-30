import axios from 'axios'

const cancelConfig = {
  request: null,
  cancelToken: null
}

async function axiosGetCancellable(url: string) {
  if (cancelConfig.request) {
    cancelConfig.request.cancel('canceled')
  }

  cancelConfig.request = axios.CancelToken.source()
  cancelConfig.cancelToken = cancelConfig.request.token
  Object.assign(cancelConfig)

  try {
    const response = await axios.get(url, cancelConfig)
    return response
  } catch (error) {
    if (error.message !== 'canceled') {
      throw error
    }
  }
}

export { axiosGetCancellable }
