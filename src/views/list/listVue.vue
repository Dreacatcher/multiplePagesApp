<template>
  <div id="app">
    <h2>基于vue+webpack的多页面开发----List</h2>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>

<style type="text/scss" lang="scss">
@import '../../assets/style/_include/_all';
h2 {
  color: $mainLightPurple;
}
</style>
