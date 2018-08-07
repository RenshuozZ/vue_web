<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {
  showFullScreenLoading,
  tryHideFullScreenLoading
} from "./utils/loading";
export default {
  name: "App",
  beforeCreate: function() {
    showFullScreenLoading();
  },
  created : function() {
    tryHideFullScreenLoading();
  }
};
</script>

<style>
</style>
