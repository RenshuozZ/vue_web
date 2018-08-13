<template>
  <div class="news">
    <!-- <el-button type="danger" v-on:click="del(multipleSelection)" plain>删除</el-button> -->
    <el-button type="danger" v-on:click="del(multipleSelection)" icon="el-icon-delete">删除</el-button>
    <div class="search">
      <el-input v-model="keyword" placeholder="请输入内容"></el-input>
      <el-button type="primary" v-on:click="search" icon="el-icon-search">搜索</el-button>
      <el-button type="success" v-on:click="add" icon="el-icon-edit">新增</el-button>
    </div>
    <el-table :data="searchResult.list" @selection-change="handleSelectionChange">
      <!-- <el-table-column type="selection" width="55" align="center">
      </el-table-column>
      <el-table-column prop="number" label="文章编号" align="center">
      </el-table-column>
      <el-table-column prop="title" label="文章标题" align="center">
      </el-table-column>
      <el-table-column prop="author" label="作者" align="center">
      </el-table-column>
      <el-table-column prop="source" label="来源" align="center">
      </el-table-column>
      <el-table-column prop="releaseTime" label="发布时间" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="del([scope.row])" type="text" size="small">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <div class="pagination">
      <el-pagination @current-change="handleCurrentChange" :current-page="searchResult.pageIndex" :page-size="searchResult.pageSize" layout="total, prev, pager, next, jumper" :total="searchResult.recordCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import newsapi from '../../api/new'
export default {
  name: 'News',
  methods: {
    handleCurrentChange (val) {
      this.searchResult.pageIndex = val
      this.search()
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    edit (row) {
      this.$router.push({ name: 'newsinfo', query: { newsId: row.id } })
    },
    search () {
      var vm = this
      newsapi
        .searchNews(
          vm.keyword,
          vm.searchResult.pageIndex,
          vm.searchResult.pageSize
        )
        .then(function (response) {
          vm.searchResult = response
        })
    },
    add (newid) {
      this.$router.push({ name: 'newsinfo' })
    },
    del (news) {
      var self = this
      var ids = []
      if (news.length === 0) {
        this.$notify.error({
          message: '请选择一个要删除的文章',
          duration: self._const.notify_duration
        })
        return
      }
      news.forEach(function (v) {
        ids.push(v.id)
      })

      newsapi.delete(ids).then(function (response) {
        self.$notify.success({
          message: '删除成功',
          duration: self._const.notify_duration
        })
        self.search()
      })
    }
  },
  data: function () {
    return {
      searchResult: {
        list: [],
        pageIndex: null,
        pageSize: null,
        recordCount: null
      },
      keyword: '',
      multipleSelection: []
    }
  },
  mounted () {
    this.search()
  }
}
</script>

<style scoped lang='scss'>
.news {
  .search {
    float: right;
    margin: 0 0 30px 0;
    .el-input {
      width: 220px;
      margin-right: 10px;
    }
  }
  .pagination {
    text-align: center;
  }
  .el-pagination {
    margin-top: 30px;
  }
}
</style>
