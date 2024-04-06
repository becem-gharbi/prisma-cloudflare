<template>
  <n-form ref="formRef" class="flex-1" @submit.prevent="onSubmit(updateAccount)">
    <n-form-item label="Name">
      <n-input v-model:value="model.name" />
    </n-form-item>

    <div class="flex gap-2">
      <n-button attr-type="reset" :disabled="pending || !edited" @click="reset">
        Reset
      </n-button>

      <n-button attr-type="submit" :loading="pending" :disabled="pending || !edited" type="primary">
        Update
      </n-button>

      <n-button class="ml-auto" attr-type="button" type="error" tertiary @click="deleteAccount">
        Delete
      </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
const { user } = useAuthSession()

const model = ref({
  name: user.value!.name,
  picture: user.value!.picture
})

const { edited, pending, onSubmit, reset, formRef } = useNaiveForm(model)

async function updateAccount () {
  await useNuxtApp().$auth.fetch('/api/user', {
    method: 'patch',
    body: {
      name: model.value.name,
      picture: model.value.picture
    }
  })

  await useAuth().fetchUser()
}

async function deleteAccount () {
  if (window.confirm('Do you want to permanently delete your account?')) {
    await useNuxtApp().$auth.fetch('/api/user', {
      method: 'delete',
      credentials: 'include'
    })

    location.reload()
  }
}
</script>
