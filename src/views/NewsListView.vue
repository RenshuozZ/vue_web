<template>
  <div class="newsview">
    <img src="../assets/dashboard/newListBn.jpg" />
    <div class="main">
      <div class="title">
        <router-link :to="{name: 'dashboard' }">
          首页
        </router-link>
        <i> > </i>
        <a href="javascript:;">全部新闻</a>
      </div>
      <ul class="list">
        <li v-for="news in searchResult.list" :key="news.id">
          <router-link :to="{name: 'newsinfoview',query: { newsId: news.id } }">
            <img :src="news.attachments[0]?news.attachments[0].url:''" v-bind:alt=" news.title">
            <div>
              <h1 class="oneLine">{{ news.title }}</h1>
              <!-- <p class="oneLine" >中关村人工智能创新创业基地作为全国首家聚焦人工智能领域的科技创新孵化服务基地，以人才培养为核心，打造人工智能产业生态。其旗下创新服务品牌AI矩阵，将于6月13日举办AI矩阵深度学习集训营， 来打造最</p> -->
              <!-- <p class="oneLine" v-html="news.content" ></p> -->
              <p v-html="news.content" class="content oneLine"> </p>
              <p class="oneLine">
                <i>来源:</i>
                <span>{{news.source}}&nbsp;</span>
                <i>时间:</i>
                <span>{{news.releaseTime}}</span>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import newsapi from '../api/new'
export default {
  name: 'NewsListView',
  methods: {
    search () {
      var vm = this
      newsapi.searchNews(null, 1, 10).then(function (response) {
        vm.searchResult = response
      })
    }
  },
  mounted () {
    this.search()
  },
  data: function () {
    return {
      searchResult: {
        list: [],
        pageIndex: null,
        pageSize: null,
        recordCount: null
      }
    }
  }
}
</script>

<style scoped lang="scss">
.newsview {
  ol,
  ul {
    list-style: none; /*清除列表默认样式*/
  }
  i {
    font-style: normal;
  }
  width: 100%;
  img {
    width: 100%;
  }
  // font-family: 'Microsoft Yahei';
  a {
    text-decoration: none; /*大部分页面中的链接没有下划线*/
  }
  font-size: 14px;
  .main {
    width: 800px;
    margin: 0 auto;
    .title {
      color: #999;
      padding-bottom: 20px;
      i {
        padding: 0 5px;
      }
      a {
        color: #999;
      }
    }
    .list li {
      margin: 30px 0;
      a {
        color: #000000;
      }
      img {
        float: left;
        width: 200px;
        height: 120px;
      }
      div {
        margin-left: 280px;
        line-height: 40px;
        height: 120px;
        h1 {
          font-size: 20px;
          color: #121212;
        }
        p {
          color: #999999;
        }
        span {
          padding: 0 10px;
        }
      }
    }
  }
  .content{
    height: 30px;
  }
  .oneLine {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .oneLine /deep/ p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
