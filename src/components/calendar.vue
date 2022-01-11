<template>
<el-row>
<el-col span="24">
<div class="grid-content bg-purple">
<el-card class="box-card">
<div slot="header" class="clearfix">
</div>
<div class="test">
<el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(2).join('-') }}
    </p>
  </template>
</el-calendar>
</div>
</el-card>
</div>
</el-col>
</el-row>
</template>

<style>
.el-calendar-table .el-calendar-day{
    height: 22px;
  }
</style>
