<template>
  <div class="main">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Main',
  components: {
    Footer
  }
}
</script>

<style scoped lang="scss" >
.main {
  ol,
  ul {
    list-style: none;
  }
}
</style>
