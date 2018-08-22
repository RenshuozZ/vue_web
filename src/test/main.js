import {
  ApiAuthPost, setDomain
} from './api'
setDomain('http://localhost:8888')
ApiAuthPost({
  username: 'admin',
  password: 'admin'
}).then(function (response) {
  console.log(response.data) // {id: "<token>", ttl: 1209600, created: "2017-01-01T00:00:00.000Z", userId: 1}
})
