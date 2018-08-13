<template>
  <div class="footer">
    <footer>
      <div class="info">
        <i>京ICP备15034667号-1</i>
        <q>京公网安备号：11010802020949</q>
      </div>
      <div class="info">
        <span>指导单位：北京市经济和信息化委员会 海淀区人民政府</span>
        <span>承办单位：中关村人工智能创新创业基地 创客天下集团</span>
      </div>
      <div class="info">
        网站名称：中关村人工智能创新服务平台
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss" >
footer {
  font-size: 14px;
  color: #b2b0b0;
  padding: 50px 0 50px;
  background: #000614;
  .info {
    text-align: center;
    line-height: 35px;
  }
  .info i {
    font-style: normal;
    padding-right: 14px;
  }
  .info span {
    padding-right: 24px;
  }
}
</style>
