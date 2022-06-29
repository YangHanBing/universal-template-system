<template>
  <div class="sidebar">
    <div class="home_left_TitleBox">
      <img
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        alt=""
        class="img"
      />
      <p class="title">imooc-admin</p>
    </div>
    <SideBarMenu></SideBarMenu>
  </div>
</template>
<script setup>
import SideBarMenu from './SideBarMenu'
</script>
<style scoped lang="scss">
.home_left_TitleBox {
  height: 82px;
  display: flex;
  align-items: center;
  color: #fff;
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
</style>
