<template>
    <div class="header">
        <div class=" clearfix" style="margin:0px 30px;">
            <a class="left clearfix" href="/default.html">
                <img src="../assets/dashboard/ailogo.png" height="82" width="63" />
                <div>
                    <span>中关村人工智能创新服务平台</span>
                    <p>Zhongguancun AI Innovation Service Platform</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
/*头部开始*/
.header {
  width: 100%;
  min-width: 1200px;
  background: #000614;
  color: #fff;
  font-size: 16px;
  height: 105px;
  .left {
    float: left;
     color: #fff;
    img {
      float: left;
      padding-top: 14px;
    }
    > div {
      float: left;
      padding: 30px 0 0 20px;
    }
    span {
      font-size: 23px;
    }
    p {
      width: 500px;
      font-size: 14px;
    }
  }
}
</style>
