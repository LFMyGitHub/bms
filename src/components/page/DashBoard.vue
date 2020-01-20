<template>
  <div>
    <!--自定义公共控件标题头-->
    <v-pageTitle vtitle="Home"></v-pageTitle>

    <div class="clear"></div>

    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <el-progress type="circle" :percentage="67" :width="80"></el-progress>
            </el-col>
            <el-col :xs="24" :sm="11" :md="12" :lg="10">
              <div class="cart-string">
                <span>新访问</span>
                <span>
                  <h2>57,820</h2>
                </span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="5" :md="4" :lg="6">
              <div class="el_img">
                <i class="material-icons">person_outline</i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <el-progress type="circle" :percentage="81" :width="80"></el-progress>
            </el-col>
            <el-col :xs="24" :sm="11" :md="12" :lg="10">
              <div class="cart-string">
                <span>购买</span>
                <span>
                  <h2>1,680</h2>
                </span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="5" :md="4" :lg="6">
              <div class="el_img">
                <i class="material-icons">attach_money</i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <el-progress type="circle" :percentage="30" :width="80"></el-progress>
            </el-col>
            <el-col :xs="24" :sm="11" :md="12" :lg="10">
              <div class="cart-string">
                <span>活跃用户</span>
                <span>
                  <h2>157,820</h2>
                </span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="5" :md="4" :lg="6">
              <div class="el_img">
                <i class="material-icons">touch_app</i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <el-progress type="circle" :percentage="88" :width="80"></el-progress>
            </el-col>
            <el-col :xs="24" :sm="11" :md="12" :lg="10">
              <div class="cart-string">
                <span>重置</span>
                <span>
                  <h2>32,645</h2>
                </span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="5" :md="4" :lg="6">
              <div class="el_img">
                <i class="material-icons">replay</i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12">
        <el-card class="box-chart">
          <pieChart></pieChart>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12">
        <el-card class="box-chart">
          <lineChart></lineChart>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="8">
        <el-card class="box-list">
          待办事项清单
          <TodoList></TodoList>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="10">
        <el-card class="box-list">
          边界表
          <borderTable></borderTable>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="6">
        <el-card class="box-list">
          讯息清单
          <MessageList></MessageList>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vPageTitle from "../common/pageTitle.vue";
import pieChart from "../charts/pieChart.vue";
import lineChart from "../charts/lineChart.vue";
import TodoList from "../todolist/TodoList.vue";
import borderTable from "../tables/borderTable.vue";
import MessageList from "../message/MessageList.vue";
export default {
  components: {
    vPageTitle,
    pieChart,
    lineChart,
    TodoList,
    borderTable,
    MessageList
  }
};
</script>

<style scoped>
.el-col {
  margin-bottom: 16px;
  text-align: center;
}
.box-card {
  height: 110px;
}
.cart-string {
  height: 100px;
  padding-top: 10px;
  font-size: 1.1rem;
}
.material-icons {
  font-size: 80px;
  color: #ddd;
}
.box-chart {
  height: 420px;
}
.box-list {
  height: auto;
  text-align: left;
}
</style>