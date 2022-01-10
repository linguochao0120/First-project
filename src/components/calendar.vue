<template>
<div id="app">
<el-calendar v-model="value">
</el-calendar>
</div>
</template>

<script>
  export default {
      components:{
          calender
      },
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>