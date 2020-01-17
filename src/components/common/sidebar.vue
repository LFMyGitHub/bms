<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" unique-opened router>
            <el-menu-item class="el-menu-home" hover="#708090" index="DashBoard">
                    <span class="sb-icon"><i class="material-icons">home</i></span>
                    <span class="sb-cn">首页</span>
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">perm_data_setting</i></span>
                    <span class="sb-cn">组件</span>
                </template>
                <el-menu-item index="EditorPage">编辑</el-menu-item>
                <el-menu-item index="MarkdownPage">降价促销</el-menu-item>
                <el-menu-item index="TodoList">待办清单</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">pie_chart</i></span>
                    <span class="sb-cn">图表</span>
                </template>
                <el-menu-item index="BasicCharts">基本图表</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">content_paste</i></span>
                    <span class="sb-cn">表单元素</span>
                </template>
                <el-menu-item index="FormInput">表格输入</el-menu-item>
                <el-menu-item index="FormLayouts">表单布局</el-menu-item>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">border_all</i></span>
                    <span class="sb-cn">表</span>
                </template>
                <el-menu-item index="BasicTables">基本表</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 66px;
        bottom: 0;
        background: #324157;
    }
    .el-menu{/**第一层下拉背景颜色 */
        background: #324157;
    }
    .sidebar span{/**第一层导航栏字体颜色 */
        vertical-align: baseline;
        color: #fff;
    }
    .el-submenu .el-menu-item{/**第二层导航栏字体颜色及背景颜色 */
        font-size: 15px;
        background: rgb(35, 48, 61);
        color: #fff;
    }
    .el-submenu :hover{/**光标移上去颜色 */
        background: #708090;
    }
    .material-icons{
        font-size: 20px;
    }
</style>