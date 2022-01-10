<template>
<div id="app">
<el-input v-model="input" placeholder="请输入内容"></el-input>
</div>
</template>
<script>
var Main = {
    data() {
      return {
        value: new Date()
      }
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')

</script>