<template>
  <div class="page justify-center items-center p-7">
    <nuxt-link
      to="/"
      class="mr-auto sm:mr-0"
    >
      <basic-logo class="text-lg" />
    </nuxt-link>

    <n-text
      class="text-lg font-medium mt-1 mr-auto sm:mr-0"
      depth="3"
    >
      {{ title }}
    </n-text>

    <div class="w-full my-auto sm:max-w-sm sm:p-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const title = computed(() => {
  switch (route.name) {
    case 'auth-login':
      return 'Login to your account'

    case 'auth-register':
      return 'Create your account'

    case 'auth-request-password-reset':
      return 'Request password reset'

    case 'auth-reset-password':
      return 'Reset your password'

    case 'auth-verify-email':
      return 'Email verification'

    case 'auth-callback':
      return 'Social login'

    default:
      return ''
  }
})
</script>
