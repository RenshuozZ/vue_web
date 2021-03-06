import api from '@/utils/api'

export default {
  searchNews (keyword, pageIndex, pageSize) {
    return api.get('/new/search', {
      'keyword': keyword,
      'pageIndex': pageIndex,
      'pageSize': pageSize
    })
  },
  getById (newsId) {
    return api.get(`/new/${newsId}`)
  },
  create (news) {
    return api.post('/new', news)
  },
  update (news) {
    return api.put('/new', news)
  },
  delete (ids) {
    return api.post('/new/delete', ids)
  }
}
