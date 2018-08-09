<template>
  <div class="sidebar">
    <el-aside>
      <el-menu :default-active='$route.path' router>
        <div class="logo-container">
          <img class="logo" src="../../assets/adminlogo.png" />
        </div>
        <!-- <el-menu-item index="/admin">首页</el-menu-item> -->
        <el-submenu index="/admin">
          <template slot="title">
            信息管理
          </template>
          <!-- <el-menu-item-group title="信息管理"> -->
          <el-menu-item index="/admin/college">大学管理</el-menu-item>
          <el-menu-item index="/admin/company">企业管理</el-menu-item>
          <el-menu-item index="/admin/laboratory">实验室管理</el-menu-item>
          <el-menu-item index="/admin/news">文章管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="/default">测试</el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  // props: ["active"]
};
</script>

<style scoped lang="scss" >
.sidebar {
  // width: 200px;
  .logo-container {
    text-align: center;
    width: 100%;
    .logo {
      width: 300px;
    }
  }
}
</style>