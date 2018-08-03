<template>
  <div class="layout">
    <el-container >
     <sidebar></sidebar>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
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
  }
};
</script>
<style  scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.main{
   padding: 30px;
}
</style>
