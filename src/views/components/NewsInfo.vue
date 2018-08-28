<template>
  <div class="newsInfo">
    <el-form label-position="right" :model="news" :rules="newsFormRules" label-width="100px" ref="newsForm">
      <el-form-item label="文章标题:" prop="title">
        <el-input v-model="news.title"></el-input>
      </el-form-item>
      <el-form-item label="文章来源:">
        <el-input v-model="news.source"></el-input>
      </el-form-item>
      <el-form-item label="文章作者:">
        <el-input v-model="news.author"></el-input>
      </el-form-item>
      <el-form-item label="发布时间:" prop="releaseTime">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="news.releaseTime"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="文章图片:">
        <el-upload class="upload-demo" action="" :before-upload="upload" :on-preview="handlePreview" :before-remove="handleRemove" :file-list="news.attachments" list-type="picture">
          <el-button size="small" type="primary">点击上传
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
          <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容:">
        <vue-editor v-model="news.content"></vue-editor>
      </el-form-item>
      <div class="btngrup">
        <el-button type="primary" v-on:click="save">保存</el-button>
        <el-button type="info" v-on:click="back">返回</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import newsapi from '../../api/new'
import attachmentapi from '../../api/attachment'
export default {
  name: 'NewsInfo',
  components: {
    VueEditor
  },
  data: function () {
    const validateRequire = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      news: {
        id: null,
        title: '',
        region: '',
        source: '',
        author: '',
        content: '',
        releaseTime: null,
        attachments: []
      },
      newsFormRules: {
        title: [
          { required: true, trigger: 'blur', validator: validateRequire }
        ],
        releaseTime: [
          { required: true, trigger: 'blur', validator: validateRequire }
        ]
      }
    }
  },
  methods: {
    upload (file) {
      var self = this
      let fd = new FormData()
      fd.append('file', file)
      attachmentapi.upload(fd).then(function (response) {
        self.news.attachments = self.news.attachments.concat(response)
      })
      return false // 返回false不会自动上传
    },
    handleRemove (file, fileList) {
      var index = this.news.attachments.indexOf(file)
      if (index > -1) {
        this.news.attachments.splice(index, 1)
      }
      return false
    },
    handlePreview (file) {
      console.log(file)
    },
    save () {
      var self = this
      this.$refs.newsForm.validate(valid => {
        if (valid) {
          if (this.news.id) {
            newsapi.update(this.news).then(function (response) {
              self.$notify.success({
                message: '修改成功',
                duration: self._const.notify_duration
              })
              self.news.id = response.id
              self.getById()
            })
          } else {
            newsapi.create(this.news).then(function (response) {
              self.$notify.success({
                message: '新增成功',
                duration: self._const.notify_duration
              })
              self.news.id = response.id
              self.getById()
            })
          }
        }
      })
    },
    getById () {
      var self = this
      newsapi.getById(self.news.id).then(function (response) {
        self.news = response
      })
    },
    back () {
      this.$router.push({ name: 'news' })
    }
  },
  mounted () {
    var self = this
    this.news.id = this.$route.query.newsId
    if (this.news.id) {
      self.getById()
    }
  }
}
</script>

<style scoped lang='scss'>
.newsInfo {
  text-align: left;
  .el-input {
    width: 15%;
  }
  .btngrup {
    float: right;
    margin-left: 10px;
  }
  .upload-demo {
    //width: 148px;
    float: left;
  }
}
</style>
