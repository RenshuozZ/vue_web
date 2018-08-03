<template>
  <div class="news">
    <div class="search">
      <el-input v-model="keyword" placeholder="请输入内容"></el-input>
      <el-button type="primary" v-on:click="search" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" v-on:click="add" icon="el-icon-edit">新增</el-button>
    </div>
    <el-table :data="searchResult.list" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center">
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
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="searchResult.pageIndex" :page-size="searchResult.pageSize" layout="total, prev, pager, next, jumper" :total="searchResult.recordCount">
    </el-pagination>
  </div>
</template>

<script>
import newsapi from "../../api/new";
export default {
  name: "News",
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
    },
    search() {
      var vm = this;
      newsapi.searchNews(vm.keyword, vm.pageIndex, vm.pageSize)
        .then(function(response) {
          vm.searchResult = response;
        });
    },
    add(newid) {
      this.$router.push({ name: "newsinfo",params: { newsId: '' } });
    }
  },
  data: function() {
    return {
      searchResult: {
        list: [],
        pageIndex: 1,
        pageSize: 10,
        recordCount: null
      },
      keyword: "",
      multipleSelection: []
    };
  },
  created() {
    this.search();
  }
};
</script>

<style scoped lang='scss'>
.news {
  .search {
    float: right;
    text-align: right;
    margin: 0 0 30px 0;
    .el-input {
      width: 220px;
    }
  }
  .el-pagination {
    margin-top: 30px;
  }
}
</style>