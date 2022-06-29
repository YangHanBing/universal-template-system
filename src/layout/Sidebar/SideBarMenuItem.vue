<template>
  <template v-if="item && !item.children">
    <el-menu-item :index="item.path">
      <el-icon>
        <svg-icon :icon="item.meta.icon"></svg-icon>
      </el-icon>
      {{ item.meta.title }}
    </el-menu-item>
  </template>
  <template v-if="item && item.children && item.children.length > 0">
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon>
          <svg-icon :icon="item.meta.icon"></svg-icon>
        </el-icon>
        {{ item.meta.title }}
      </template>
      <SideBarMenuItem
        v-for="(childItem, index) in item.children"
        :menuList="childItem"
        :key="index"
      ></SideBarMenuItem>
    </el-sub-menu>
  </template>
</template>
<script setup>
// import { defineProps } from 'vue'
import { reactive, defineProps } from 'vue'
const props = defineProps({
  menuList: {
    type: Object,
    default: () => {}
  }
})
// const item = props.menuList
const item = reactive(props.menuList)
</script>
<style scoped lang="scss"></style>