<template>
  <div id="container">
    <div id="header">

      <div class="logo">
    <img src="../assets/logo.jpg" alt="logo">
    </div>

    <div class="theme">
    <h1>浙江泰嘉光电MIT中心事务管理系统</h1>
     <div class="user">
     <h4>欢迎您，<u>{{this.$store.state.title}}</u>
     <el-button @click="loginOut">退出</el-button></h4>
    </div>
     
      </div>
    </div>
    
    <div id="nav_top">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="#545c64"
  text-color="#fff" active-text-color="#ffd04b">
<el-menu-item index="1" style="font-size: 18px;"><router-link to="home" style="text-decoration: none;">首页</router-link></el-menu-item>
    <el-menu-item index="2" style="font-size: 18px;">事务追踪</el-menu-item>
    <el-menu-item index="3" style="font-size: 18px;"><router-link to="meeting" style="text-decoration: none;">会议中心</router-link></el-menu-item>
    <el-menu-item index="4" style="font-size: 18px;">工单管理</el-menu-item>
  </el-menu>
  </div>

<div id="nav-left">
<el-row class="tac">
  <el-col>
    <el-menu
      default-active="3"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      
     <router-link to="meeting" style="text-decoration: none">
        <el-menu-item index="1">
        <i class="el-icon-date"></i>
        <span slot="title">会议日历</span>
      </el-menu-item>
     </router-link>
    
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

  <div id="main-right">
    <div class="theme1">
   <b>主题</b>&nbsp;&nbsp;<input type="" name="" id="" value="" /><button>搜索</button>
    </div>
    <div class="timeframe">
  <timeframe></timeframe>
  </div>
    </div>

    <div id="footer">
    </div>
  </div>
</template>

<style>

  #container{
    width: 1100px;
    height: 675px;
    border: 2px solid black;
    margin: 0 auto;
    padding: 0 30px;
    margin-top: -30px;


  }
  #header{
    margin: 10px 0;
    padding: 0px;
    border: 2px solid #87CEFA;
    width: 1096px;
    height: 100px;
    margin-top: 30px;
    border-radius:10px;



  }
.logo{
    float: left;
    width: 120px;
    height: 65px;
    border: 2px solid #87CEFA;
    margin-left: 40px;
    margin-top: 18px;
    border-radius:10px;
  }
.theme{
  border: 0px solid #87CEFA;
  padding: 5px;
  margin-left: 100px;
  border: 0px solid red;

}
.theme h1{
  text-align:left;
  margin-left: 90px;
  font-size: 30px;
  font-family: "微软雅黑";
}

.user{
  float: right;
  margin-top: -50px;
  border: 0px solid blue;
}
.A1{
  clear: both;
  float: right;
  margin-top: -45px;
  margin-right: 20px;
  }
.A2{
  height: 35px;
}

#nav_top{
  width: 1100px;
  margin: 6px 0;
  border: 0px solid #87CEFA;
  height: 60px;
  border-radius:5px;
}
.tac{
  border: 2px solid #87CEFA;
  width: 180px;
  height: 394px;
  margin: 0;
  padding: 0;
  margin-top:-40px;
}
.tac span{
  margin: 10px;
  font-family: '微软雅黑';
  font-size: 18px;
}
#nav-left{
  margin: 0;
  padding: 0;
  margin-top: 50px;
  float: left;
  
}
#main-right{
  margin: 10px 0;
  width: 896px;
  height: 390px;
  border: 2px solid #87CEFA;
  float: right;
  margin-left: 20px;
}
.theme1{
   float: left;
   margin-top: 15px;
   margin-left: 40px;
}
.theme1 b{
  font-size: 18px;
  font-family: '微软雅黑';

}
.theme1 input{
   width: 180px;
   height: 35px;
   border: 1px solid rgb(212, 210, 210);
   border-radius: 4px;
}
.theme1 button{
  position: relative;
  right: -4px;
  top:1px;
  width: 50px;
  height: 40px;
  font-size: 14px;
  color:white;
  background: #7FCC0B;
  border: 0;
  border-radius: 4px;
}
.timeframe{
  float:right;
}
#footer{
  margin: 10px 0;
  width: 1096px;
  height: 40px;
  border: 2px solid #87CEFA;
  clear: both;
}

</style>

<script>
  import {getUserInfo} from '../request/api.js'
  // import nav_left from '../components/nav_left.vue'//引用组件
  import timeframe from '../components/timeframe.vue'
  export default {
  //  components:{
  //    nav_left
  //   },
  components:{
    timeframe
  },
    data() {
      return {
        activeIndex: '3',
        activeIndex2: '3'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  
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
  },
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
