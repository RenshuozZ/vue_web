<template>
  <div class="login">
    <h1>管理后台登录</h1>
    <div class="login-box" i>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-row>
          <el-col :span="8">
            <el-form-item prop="username">
              <el-input placeholder="请输入帐号" v-model="loginForm.username">
                <template slot="prepend">帐号</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item prop="password">
              <el-input type="password" placeholder="请输入密码" v-model="loginForm.password">
                <template slot="prepend">密码</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="btns" :span="8">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button>返回</el-button>
          </el-col>
        </el-row>
      </el-form>
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
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          auth.authToken(this.loginForm).then(function (response) {
            self.$store.commit('1', response.token)
            self.$router.push({ name: 'admin' })
          })
        }
      })
    }
  },
  data: function () {
    const validateRequire = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码至少6位有效数字'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'a@b.c',
        password: 'qq123456'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateRequire }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      }
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
  // margin-bottom: 20px;
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
