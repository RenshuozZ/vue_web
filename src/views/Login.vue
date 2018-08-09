<template>
  <div class="login">
    <h1>管理后台登录</h1>
    <div class="login-box" i>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入帐号" v-model="username">
            <template slot="prepend">帐号</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-input type="password" placeholder="请输入密码" v-model="password">
            <template slot="prepend">密码</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="btns" :span="8">
          <el-button type="primary" v-on:click="login">登录</el-button>
          <el-button>返回</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import auth from '../api/auth'

export default {
  name: 'Login',
  methods: {
    login () {
      var self = this
      auth.authToken(this.username, this.password).then(function (response) {
        self.$store.commit('1', response.token)
        self.$router.push({ name: 'admin' })
      })
    }
  },
  data: function () {
    return {
      username: null,
      password: null
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  margin-top: 5%;
  text-align: center;
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
.btns {
  text-align: right;
}
</style>
