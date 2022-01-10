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

  <div id="main" name="会议中心">
    <div id="nav_left_1">
       <nav_left_1></nav_left_1>
    </div>
   
    <div class="query">
     <b>主题</b><el-input v-model="input" placeholder="请输入会议名称" class="input1"></el-input>
  </div>
    </div>

    <div id="footer">
    </div>
  </div>
</template>

<style>
  ::-webkit-input-placeholder {
    text-align:center;
    }
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
    width: 1100px;
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
  width: 1104px;
  margin: 6px 0;
  border: 0px solid #87CEFA;
  height: 60px;
  border-radius:5px;
}
#main{
  margin: 10px 0;
  width: 1100px;
  height: 390px;
  border: 2px solid #87CEFA;
}

#footer{
  margin: 10px 0;
  width: 1100px;
  height: 40px;
  border: 2px solid #87CEFA;
}

</style>

<script>
  import {getUserInfo} from '../request/api.js'
  import nav_left_1 from '../components/nav_left_1.vue'//引用组件

  export default {
 components:{
   nav_left_1
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
  }
}

</script>
