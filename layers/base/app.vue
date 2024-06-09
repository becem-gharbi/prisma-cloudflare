<template>
  <naive-config>
    <nuxt-loading-indicator
      color="#2563eb"
      :height="3"
    />
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>

    <div class="fixed bottom-2 flex w-full justify-center">
      <repo-link />
    </div>
  </naive-config>
</template>

<style>
.page {
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
