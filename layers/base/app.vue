<template>
  <NaiveConfig>
    <NuxtLoadingIndicator color="#2563eb" :height="3" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NaiveConfig>
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
