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
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
  text-color="#fff" active-text-color="#ffd04b">
<el-menu-item index="1" style="font-size: 18px;"><router-link to="home" style="text-decoration: none;">首页</router-link></el-menu-item>
    <el-menu-item index="2" style="font-size: 18px;">事务追踪</el-menu-item>
    <el-menu-item index="3" style="font-size: 18px;"><router-link to="meeting" style="text-decoration: none;">会议中心</router-link></el-menu-item>
    <el-menu-item index="4" style="font-size: 18px;">工单管理</el-menu-item>
    
  </el-menu>
  </div>

  <div id="main" name="首页">
    <h1>Tip</h1>
    <img src="../assets/jiantou1.png" class="m1">
    <h3>事务相关：</h3>
    <div class="M1">
      <ul>
       <li><a href="#">DCC二阶文档制定</a></li>
       <li><a href="#">EAS运营案的深化设计及讨论</a></li>
       <li><a href="#">项目验收流程的配合推动完善</a></li>
       <li><a href="#">事务管理系统建设</a></li>
       <li><a href="#">培训平台、E-HR组织架构拉通及数据导入方案</a></li>
      </ul>
      <p class="p1"><a href="#">more>></a></p>
    </div>
 <h3 class="gongdan">工单相关：</h3>
    <div class="M2">
      <ul>
       <li><a href="#">DCC二阶文档制定</a></li>
       <li><a href="#">EAS运营案的深化设计及讨论</a></li>
       <li><a href="#">项目验收流程的配合推动完善</a></li>
       <li><a href="#">事务管理系统建设</a></li>
       <li><a href="#">培训平台、E-HR组织架构拉通及数据导入方案</a></li>
      </ul>
      <p class="p2"><a href="#">more>></a></p>
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
  margin-right: 25px;
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
#main{
  margin: 10px 0;
  width: 1096px;
  height: 390px;
  border: 2px solid #87CEFA;
}
#footer{
  margin: 10px 0;
  width: 1096px;
  height: 40px;
  border: 2px solid #87CEFA;
}

#main h1{
  float: left;
  margin: 0;
  padding: 0;
}
#main .m1{
  float: left;
  margin-top: 5px;
}
#main h3{
  float: left;
  margin-top: 35px;
}
.M1{
  float: left;
  border: 3px solid red;
  margin-top: 35px;
  width: 480px;
  height: 150px;
  margin-left: 20px;
  border-radius: 30px;

}
.M1 ul{
  float: left;
}
.M1 ul li{
  font-family: "微软雅黑";
  font-size: 17px;
  text-align: left;
}
.p1{
  float: right;
  margin-top: 125px;
  margin-right: 25px;
}
.p1 a{
  text-decoration: none;
}
.gongdan{
  clear: both;
  margin-left: 80px;
}
.M2{
   border: 3px solid black;
   width: 480px;
   height: 150px;
   margin-left: 188px;
   border-radius: 30px;
   margin-top: 220px;
}
.M2 ul{
  float: left;
}
.M2 ul li{
  font-family: "微软雅黑";
  font-size: 17px;
  text-align: left;
}
.p2{
  float: right;
  margin-top: 125px;
  margin-right: 25px;
}
.p2 a{
  text-decoration: none;
}
</style>


<script>
import {getUserInfo} from '../request/api.js'
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

