<template>
  <div class="newsInfo">
    <el-form label-position="right" :model="news" label-width="80px">
      <el-form-item label="文章标题:">
        <el-input v-model="news.title"></el-input>
      </el-form-item>
      <el-form-item label="文章来源:">
        <el-input v-model="news.source"></el-input>
      </el-form-item>
      <el-form-item label="文章作者:">
        <el-input v-model="news.author"></el-input>
      </el-form-item>
      <el-form-item label="活动时间:">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="news.releaseTime"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="文章图片:">
        <el-upload class="upload-demo" action="action" :before-upload="upload" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="news.attachments" list-type="picture">
          <el-button size="small" type="primary">点击上传
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
          <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容:">
        <vue-editor v-model="news.content"></vue-editor>
      </el-form-item>
      <el-button type="primary" v-on:click="save">保存</el-button>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import newsapi from "../../api/new";
export default {
  name: "NewsInfo",
  components: {
    VueEditor
  },
  data() {
    return {
      news: {
        id: null,
        title: "",
        region: "",
        source: "",
        author: "",
        content: "",
        releaseTime: null,
        attachments: []
      }
    };
  },
  methods: {
    upload(file) {
      fd.append("key", file, "fileName");

      // 自己上传文件 想加什么都可以
      // axios.post([url], fd, {

      //     // 加这里
      //     headers: {

      //     }
      // })
      return false; // 返回false不会自动上传
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    save() {
       var self = this;
      if (this.news.id) {
      } else {
        newsapi.create(this.news).then(function(response) {
          self.getById(response.id);
        });
      }
    },
    getById() {
      var self = this;
      newsapi.getById(self.news.id).then(function(response) {
        self.news = response;
      });
    }
  },
  created() {
    var self = this;
    this.news.id = this.$route.query.newsId;
    if (this.news.id) {
      self.getById();
    }
    // this.search();
  }
};
</script>

<style scoped lang='scss'>
.newsInfo {
  text-align: left;
  .el-input {
    width: 15%;
  }
  .upload-demo ul {
    width: 20px;
  }
}
</style>