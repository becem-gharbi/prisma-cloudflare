<template>
  <nuxt-link
    :to="repository"
    target="_blank"
  >
    <n-button
      text
      class="opacity-80"
    >
      <template #icon>
        <naive-icon name="tabler:brand-github" />
      </template>
      Source code @{{ version }}
    </n-button>
  </nuxt-link>
</template>

<script setup lang="ts">
import { repository, version } from '~/package.json'
</script>
