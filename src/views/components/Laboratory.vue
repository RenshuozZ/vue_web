<template>
  <div class="laboratory">
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="name" label="实验室名称">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Laboratory',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style scoped>
</style>
