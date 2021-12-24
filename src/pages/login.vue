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
      <el-form-item label="账号" prop="user">
        <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" @keyup.enter.native="submitForm"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

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

