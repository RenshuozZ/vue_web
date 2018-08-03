<template>
  <div class="login">
    <h1>管理后台登录</h1>
    <div class="login-box" i>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入帐号">
            <template slot="prepend">帐号</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-input type="password" placeholder="请输入密码">
            <template slot="prepend">密码</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="btns" :span="8">
          <el-button type="primary">登录</el-button>
          <el-button>返回</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped lang="scss">
.login {
  margin-top: 5%;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.login-box {
  margin-top: 30px;
  margin-left: 40%;
}
.btns{
  text-align: right;
}
</style>
