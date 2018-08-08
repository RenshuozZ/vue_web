<template>
  <div class="appMain">
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "AppMain"
};
</script>

<style scoped >
.appMain {
  overflow: hidden;
  /* margin-left: 100px; */
  padding: 20px;
}
</style>
