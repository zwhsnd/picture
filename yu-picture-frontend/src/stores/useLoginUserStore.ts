import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginUserUsingGet } from '@/api/userController.ts'

//这是一个用户的全局状态管理器，核心作用是统一管理当前登录用户，让多个页面共享同一份用户状态，并在用户信息变化后自动更新页面。
export const userLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<API.LoginUserVO>({ //按照openapi插件生成的vo对象类型来约束这边定义对象的字段属性
    userName: '未登录',
  })

  /**
   * 远程获取用户登录信息
   */
  async function fetchLoginUser() {
    const res = await getLoginUserUsingGet();
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data;
    }
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, setLoginUser, fetchLoginUser }
})
