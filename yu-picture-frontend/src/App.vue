<template>
  <div ip="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'

//已经改为在权限校验中获取
// import { healthUsingGet } from '@/api/mainController.ts'
// import { userLoginUserStore } from '@/stores/useLoginUserStore.ts'
//
// const loginUserStore = userLoginUserStore()
// loginUserStore.fetchLoginUser()
//
// healthUsingGet().then(res =>{
//   console.log(res)
// })
</script>

<style scoped></style>
