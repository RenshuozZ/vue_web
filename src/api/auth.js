import api from '@/utils/api'

export default {
  authToken (loginForm) {
    return api.post('/auth', loginForm)
  }
}
