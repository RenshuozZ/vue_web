<template>
  <div class="layout">
    <el-container>
      <sidebar></sidebar>
      <el-container>
        <!-- <navbar></navbar> -->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown @command="handleCommand">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item command="quit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 30px">           
            <el-breadcrumb-item v-for="route in $route.matched" v-if="route.path != '/'" :to="route.path" :key="route.path">{{ route.meta.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <app-main></app-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import AppMain from "./AppMain";
import Navbar from "./Navbar";

export default {
  name: "Layout",
  components: {
    Sidebar,
    AppMain,
    Navbar
  },
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
<style  scoped>


</style>
