<template>
  <div class="layout">
    <el-container>
      <sidebar></sidebar>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown @command="handleCommand">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <!-- <el-dropdown-item>新增</el-dropdown-item> -->
              <el-dropdown-item command="quit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <app-main class="main"></app-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import AppMain from "./AppMain";
import TagsView from "./TagsView";

export default {
  name: "Layout",
  components: {
    Sidebar,
    AppMain,
    TagsView
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
