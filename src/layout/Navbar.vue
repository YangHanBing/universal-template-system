<template>
  <div class="navabr">
    <div class="navbar_con">
      <div class="navbar_left">
        <p>个人中心</p>
      </div>
      <div class="navbar_right">
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            <el-avatar shape="square" :size="40" :src="avatarUrl" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="home">首页</el-dropdown-item>
              <el-dropdown-item command="project">课程主页</el-dropdown-item>
              <el-dropdown-item divided command="logout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="tagsView"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})
const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleTohome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
const handleTohome = () => {
  router.push('/')
}
const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>
<style scoped lang="scss">
.navabr {
  .navbar_con {
    height: 50px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 20px;
  }
  .tagsView {
    height: 34px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  }
}
</style>
