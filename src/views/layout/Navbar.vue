<template>
  <div class="navbar">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown @command="handleCommand">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item command="quit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'news' }">文章管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    handleCommand(command) {
      if (command === "quit") {
        this.$store.commit("2");
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  /* text-align: right;
  font-size: 12px; */
}
</style>