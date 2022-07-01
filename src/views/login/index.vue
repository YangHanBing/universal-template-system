<template>
  <div class="login-container">
    <el-form
      ref="LoginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
        <el-tooltip
          class="box-item"
          effect="light"
          content="国际化"
          placement="bottom"
        >
        <svg-icon className="svg-language" icon="language" append-to></svg-icon>
        </el-tooltip>
        <!-- <span class="icon">icon</span> -->
      </div>
      <el-form-item prop="username">
        <!-- svg本底图标 -->
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <!-- element-plus图标 -->
        <!-- <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span> -->
        <el-input v-model.trim="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password"></svg-icon>
          </el-icon>
        </span>
        <el-input
          :type="inputType"
          v-model.trim="loginForm.password"
        ></el-input>
        <span class="svg-pwd" @click="handllePassWordStatus">
          <el-icon>
            <svg-icon :icon="passwordIconStatus"></svg-icon>
          </el-icon>
        </span>
      </el-form-item>
      <el-button class="login-button" type="primary" @click="handleLoginSubmit"
        >登录</el-button
      >
    </el-form>
    <div class="desc">
      测试权限账号：<br />
      提供三种权限账号：<br />
      1. 超级管理员账号: super-admin<br />
      2. 管理员账号: admin<br />
      3. 测试可配置账号: test<br />
      密码统一为: 123456<br />
      <br />
      导入用户账号：<br />
      可使用导入的用户名登录<br />
      密码统一为: 123456<br />
      <b>注意：导入用户区分中英文库！！！！</b>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { validatePassword } from './rule'
// import { Avatar, Search, View, Hide } from '@element-plus/icons-vue'
import md5 from 'md5'
import util from '../../utils/util'
import { useStore } from 'vuex'
import { setTimeStamp } from '../../utils/auth'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const inputType = ref('password')

const LoginForm = ref()

const loginForm = reactive({
  username: 'super-admin',
  password: '123456'
})

const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})

// 利用计算属性监听密码框状态
const passwordIconStatus = computed(() => {
  return inputType.value === 'password' ? 'eye' : 'eye-open'
})

// 登录事件
const handleLoginSubmit = async () => {
  if (!LoginForm.value) return
  await LoginForm.value.validate(async (valid) => {
    if (valid) {
      const newLoginForm = util.deepCopy(loginForm)
      newLoginForm.password = md5(newLoginForm.password)
      const response = await store.dispatch('user/login', newLoginForm)
      setTimeStamp()
      if (response.token) router.push('/')
    }
  })
}

// 点击密码框状态切换
const handllePassWordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  position: relative;
  height: 100vh;
  overflow: auto;
  background-color: $bg;

  .login-form {
    width: 520px;
    padding: 0 35px;
    position: absolute;
    left: 50%;
    margin-left: -300px;
    top: 140px;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }

      .svg-pwd {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        background: transparent !important;
        box-shadow: none;
      }
      .el-input__wrapper.is-focus {
        box-shadow: none;
      }
      input {
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
      }
      ::v-deep .svg-language {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 22px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    .login-button {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
.desc {
  color: #fff;
  position: absolute;
  top: 405px;
  width: 520px;
  height: 310px;
  margin-left: 390px;
  line-height: 28px;
}
</style>
