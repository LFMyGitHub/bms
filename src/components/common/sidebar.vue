<template>
  <el-menu
    class="sidebar"
    unique-opened
    default-active="onRoutes"
    @open="handleOpen"
    @close="handleClose"
    background-color="#324157"
    router
  >
    <el-menu-item index="DashBoard">
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="EditorPage">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-menu-item index="2-4">选项1</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>导航二</span>
      </template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
      <el-menu-item index="3-4">选项1</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>导航三</span>
      </template>
      <el-menu-item index="4-1">选项1</el-menu-item>
      <el-menu-item index="4-2">选项2</el-menu-item>
      <el-menu-item index="4-3">选项3</el-menu-item>
      <el-menu-item index="4-4">选项1</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>导航四</span>
      </template>
      <el-menu-item index="5-1">选项1</el-menu-item>
      <el-menu-item index="5-2">选项2</el-menu-item>
      <el-menu-item index="5-3">选项3</el-menu-item>
      <el-menu-item index="5-4">选项1</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 66px;
  bottom: 0;
  background: #324157;
}
.el-menu {
  /**第一层下拉背景颜色 */
  background: #324157;
}
.sidebar span {
  /**第一层导航栏字体颜色 */
  vertical-align: baseline;
  color: #fff;
}
.el-submenu .el-menu-item {
  /**第二层导航栏字体颜色及背景颜色 */
  font-size: 15px;
  background: rgb(35, 48, 61);
  color: #fff;
}
.el-submenu :hover {
  /**光标移上去颜色 */
  background: #708090;
}
.ssss :hover {
  /**光标移上去颜色 */
  background: #708090;
}
.material-icons {
  font-size: 20px;
}
</style>