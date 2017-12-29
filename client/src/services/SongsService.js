import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  post (data) {
    return Api().post('songs', data)
  },
  put (data) {
    return Api().put(`songs/${data.id}`, data)
  }

}
