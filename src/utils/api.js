import Service from '@/utils/request'

export default {
  get (url, query) {
    return Service({
      url: url,
      method: 'get',
      params: query
    })
  },
  post (url, data) {
    return Service({
      url: url,
      method: 'post',
      data: data
    })
  },
  put (url, data) {
    return Service({
      url: url,
      method: 'put',
      data: data
    })
  }

}
