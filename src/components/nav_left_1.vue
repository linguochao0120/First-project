<template>
<div id="app">
<el-row class="tac">
  <el-col>
    <el-menu
      default-active="3"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
        <el-menu-item index="1">
        <i class="el-icon-date"></i>
        <span slot="title">会议日历</span>
      </el-menu-item>
    
      <el-menu-item index="2">
        <i class="el-icon-edit-outline"></i>
        <span slot="title" class="meet">预约会议</span>
      </el-menu-item>

    <router-link to="meetingsearch" style="text-decoration: none">
      <el-menu-item index="3">
          <i class="el-icon-search"></i>
        <span slot="title">查询会议</span>
      </el-menu-item>
   </router-link>

      <el-menu-item index="4">
        <i class="el-icon-monitor"></i>
        <span slot="title">会议室</span>
      </el-menu-item>

    </el-menu>
  </el-col>
</el-row>
</div>
</template>

<style>
.tac{
  border-right: 2px solid #87CEFA;
  border-top: 2px solid #87CEFA;
  width: 144px;
  height: 370px;
  margin: 0;
  padding: 0;
  margin-top:-40px;
}
.tac span{
  margin: 10px;
  font-family: '微软雅黑';
  font-size: 18px;
}
</style>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>