<template>
  <div class="hamburger">
    <svg-icon icon="hamburger-opened"></svg-icon>
  </div>
</template>
<script setup>

</script>
<style scope lang="scss">
.hamburger{
  width : 50px;
  height : 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  transition : 0.1s;
  position: relative;
  left: -20px;
  .svg-icon{
    font-size: 20px;
  }
}
.hamburger:hover{
  background-color : rgba(0,0,0, 0.2)
}
</style>