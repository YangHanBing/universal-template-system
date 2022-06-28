<template>
  <div class="container">
    <el-row>
      <el-col :span="4" class="home_left">
        <div class="home_left_TitleBox">
          <img
            src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
            alt=""
            class="img"
          />
          <p class="title">imooc-admin</p>
        </div>
        <el-menu
          active-text-color="#fff"
          background-color="#304156"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="rgba(255, 255, 255, 0.705)"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <el-icon><setting /></el-icon>
            <span>个人中心</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><setting /></el-icon>
            <span>数据可视化</span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><location /></el-icon>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">员工管理</el-menu-item>
              <el-menu-item index="3-2">角色管理</el-menu-item>
              <el-menu-item index="3-3">权限管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><location /></el-icon>
              <span>文章</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">文章排名</el-menu-item>
              <el-menu-item index="4-2">创建文章</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="home_right">
        <div class='navabr'>
          <div class='home_right_nav'>

          </div>
          <div class="tagsView">

          </div>
        </div>
        <div class="addmamin">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.container {
  height: 100vh;
  .home_left {
    background-color: #304156;
    color: #fff;
    .home_left_TitleBox {
      height: 82px;
      display: flex;
      align-items: center;
      .img {
        width: 44px;
        height: 44px;
        border-radius: 5px;
        margin: 0 20px 0 20px;
      }
      .title {
        font-weight: 600;
      }
    }
    .el-menu-vertical-demo {
      background-color: #304156;
    }
  }
  .home_right {
    color: #000;
    .home_right_nav{
      height: 50px;
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    }
    .tagsView{
      height: 34px;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    }
  }
}
</style>
