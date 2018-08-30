<template>
  <div class="appMain">
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped >
.appMain {
  overflow: hidden;
  /* margin-left: 20px; */
  padding: 20px;
  /* border:1px solid #FFFFF0; */

}
</style>
