<template>
  <div class="container">
    <ul class="tagsview_list">
      <li
        class="tag"
        v-for="(item, index) in tagsView"
        :key="index"
        @click="handleSelected(item.path)"
        :class="{ active: $route.path === item.path }"
      >
        {{ item.title }}
        <span @click.stop="handleCloseTag(index)">
          <svg-icon v-if="!($route.path === item.path)" icon="close"></svg-icon>
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
const router = useRouter()
const route = useRoute()
const store = useStore()
// 监听点击的页面的路由
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      store.commit('tagsview/setTagsView', obj)
    }
  },
  // immediate: true 进入页面就开始监听
  // deep: true 开启深度监听
  { immediate: true, deep: true }
)
// 获取tagsview的数据
const tagsView = computed(() => {
  return store.getters.tagsview
})
// tagsview的点击事件
const handleSelected = (path) => {
  router.push(path)
}
// tagsview的删除事件
const handleCloseTag = (index) => {
  store.commit('tagsview/removeTagsView', index)
}
</script>
<style scoped lang="scss">
.tagsview_list {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

  .tag {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
  }

  .tagsview_list {
    overflow-x: auto;
  }

  .tag.active {
    background-color: rgb(48, 65, 86);
    color: #fff;
  }
}
</style>
