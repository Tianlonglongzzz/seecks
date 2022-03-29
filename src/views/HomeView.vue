<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="">
      <el-menu :router="true">
        <el-menu-item class="item top-txt" style=" background-color: #0079d9;">
          <span>ElementUi管理后台</span>
        </el-menu-item>
        <el-menu-item class="item" index="/">
          <i class="el-icon-menu"></i>
          <span slot="title" style="color:#ccc">首页</span>
        </el-menu-item>
        <el-submenu class="group-item" index="1">
          <template class="ffftxt" slot="title"
            ><i class="el-icon-message"></i>
             <span style="color:#ccc">文章管理</span> 
          </template
          >
          <el-menu-item-group>
            <el-menu-item class="hh" index="1-1">
              <input type="radio" />文章列表
            </el-menu-item>
            <el-menu-item class="hh" index="1-2">
              <input type="radio" />多层级路由示例
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">
        <!-- 面包屑 -->
        <div>
          <el-breadcrumb
            class="headr-mbx"
            separator-class="el-icon-arrow-right"
          >
            <el-breadcrumb-item
              ><span class="meun el-icon-menu"></span
            ></el-breadcrumb-item>
            <el-breadcrumb-item
              v-for="(item, index) in this.$route.meta"
              :key="index"
              >{{ item }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <div>
          <el-dropdown>
            <img class="img" src="@/assets/logo.png" alt="" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "SystemView",
  data() {
    return {};
  },
};
</script>

<style scoped>


.el-menu li{
  background-color: #222D32;
  color: #ccc;
}
.el-aside{
  background-color: #222D32;
}


.ffftxt {
  color: #fff;
}
.hh > input {
  margin-top: -3px;
  margin-right: 10px;
}
.hh {
  margin: 0;
  padding: 0;
  line-height: 20px;
  font-size: 12px;
}
.hh:hover {
  color: deepskyblue;
}

.meun {
  color: #fff;
  font-size: 20px;
}
.top-txt {
  height: 60px;
  background-color: #0079d9;
  color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #0086f1;
}

.headr-mbx {
  height: 50px;
  line-height: 40px;
}
.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>