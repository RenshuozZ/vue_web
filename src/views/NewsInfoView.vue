<template>
    <div class="newsinfoview">
        <Header></Header>
        <div style="width:1200px;margin: 0 auto;" class="main">
            <div class="title">{{ news.title }}</div>
            <p v-html="news.content" class="content"> </p>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import newsapi from '../api/new'
export default {
  name: 'NewsInfoView',
  components: {
    Header
  },
  data: function () {
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
      }
    }
  },
  methods: {
    getById () {
      var self = this
      newsapi.getById(self.news.id).then(function (response) {
        self.news = response
      })
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

<style lang="scss" scoped>
.newsinfoview {
  .main {
    color: #5a5a5a;
    line-height: 32px;
    font-size: 16px;
    letter-spacing: 2px;
    padding-bottom: 80px;
    .title {
      text-align: center;
      padding: 50px 30px;
      font-size: 24px;
      color: #2c2b2b;
      font-weight: bold;
    }
    .content {
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
