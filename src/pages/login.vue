//登录页面
<template>
  <div id="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
    <div class="title">
    <p class="etheme"><b>事&nbsp;务&nbsp;管&nbsp;理&nbsp;系&nbsp;统</b><br>Transaction management system</p>
    </div>
      <el-form-item label="账号" prop="user" class="username">
        <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="密码" prop="pwd" class="password">
        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" @keyup.enter.native="submitForm"></el-input>
      </el-form-item>
       <br>
      <el-form-item class="login-buttom">
        <el-button type="primary" @click="submitForm('ruleForm')" >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
#login{
  border: 1px solid rgb(246, 248, 253);
  width: 570px;
  height: 280px;
  margin: 0 auto;
  background-color:whitesmoke;
  margin-top: 10%;
 
}
.title{
  border: 0px solid red;
}
.etheme{
  margin: 0 auto;
  margin-top: 10px;
}
.etheme b{
  font-size: 25px;
}
.username{
  width: 500px;
  padding-top: 25px;
}
.password{
  width: 500px;
  margin-top: -10px;
}
.login-buttom{
  margin-left: -100px;
  margin-top:-10px;
}
</style>
<script>
import { getLogin } from "../request/api.js";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        user:'',
        pwd:''
      },
      rules: {
        user: [{ required: true, trigger: "blur" }],
        pwd: [{ required: true, trigger: "blur" }]
      },
    };
  },
  computed: {
    user: {
      get() {
        return this.$store.state.ruleForm.user;
      },
      set(newVal) {
        this.$store.commit("setUser", newVal);
      }
    },
     pwd: {
      get() {
        return this.$store.state.ruleForm.pwd;
      },
      set(newVal) {
        this.$store.commit("setPwd", newVal);
      }
    },
  },
  created() {

  },
  methods: {
    submitForm(formName) {
      this.user=this.ruleForm.user
      this.pwd=this.ruleForm.pwd
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('getLogin')
        } else {
          console.log("用户名或密码错误");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

