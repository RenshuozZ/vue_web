<template>
  <div class="hello">
    hello
  </div>
</template>

<script>
import {
  ApiAuthPost, setDomain
} from '../test/api'
export default {
  name: 'HelloWorld',
  methods: {
    login () {
      setDomain('http://localhost:8888')
      ApiAuthPost({username: 'username', password: ' this'}).then(function (response) {
        console.log(response)
      })
    }
  },
  mounted () {
    this.login()
  }

}
</script>

<style scoped>
</style>
