//登陆后home页面
<template>
  <div id="login">
    <h1>{{this.$store.state.title}}</h1>
    <el-button @click="loginOut">退出</el-button>
     <el-table
      :data="tableData"
      style="width: 100%">
       <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
       <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getUserInfo} from '../request/api.js'
export default {
  name: 'Home',
  data () {
    return {
      tableData:[]
    }
  },
  created(){
    getUserInfo().then(res => {
    console.log(res)
    this.tableData = res.data
  })

  },
  methods:{
    loginOut(){
      this.$store.dispatch('loginOut')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

