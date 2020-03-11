<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;" :header-cell-class-name="setHeaderClass">
    <el-table-column label="正在考试列表" width="200">
      <template slot-scope="scope">
        {{ scope.row.examName }}
      </template>
    </el-table-column>
    <el-table-column label="" width="120" align="center">
      <template slot-scope="scope">
        <div>{{ scope.row.examTime }}</div>
        <el-progress type="line" :percentage="40" :width="40" />
      </template>
    </el-table-column>
    <el-table-column label="" width="120" align="center">
      <template slot-scope="scope">
        <div>{{ scope.row.examPerson }}人</div>
        <el-progress type="circle" :percentage="90" :width="40" />
      </template>
    </el-table-column>
    <el-table-column label="" min-width="100" align="center">
      <template slot-scope="{row}">
        <el-button icon="el-icon-share" circle title="复制连接" @click="share(row)" />
        <el-button type="primary" icon="el-icon-download" circle title="生成二维码" @click="ecode(row)" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: [
        {
          id: 0,
          examName: '大学第二学期高等数学',
          examTime: '12:20 ~ 13:40',
          object: '数学',
          examPerson: 10000,
          examPersonActul: 800,
          url: 'http:localhost:3000'
        },
        {
          id: 2,
          examName: '大学第二学期高等数学',
          examTime: '12:20 ~ 13:40',
          object: '数学',
          examPerson: 10000,
          examPersonActul: 800,
          url: 'http:localhost:3000'
        }
      ]
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    },
    setHeaderClass(row, column, rowIndex, columnIndex) {
      console.log(row, column, rowIndex, columnIndex)
      if (row.rowIndex === 0 && row.columnIndex === 0) {
        return 'headerTitle'
      }
    },
    share(row) {
      this.$copyText(row.url).then(res => {
        console.log(res);
        this.$message({
          message: '考试链接已经复制到剪贴板！',
          type: 'success'
        })
      })
    },
    ecode() {
      // const encode = row.url
    }
  }
}
</script>
<style lang="scss"  scoped>
.headerTitle div{
  font-size: 20px;
  color:#333333;
}

</style>
