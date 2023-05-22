<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import localstorage from '@/utils/localstorage_helper'
import { checkAuthState } from '@/utils/authenticationHelper'
export default {
  methods: {
    listenToAuthStatus() {
      checkAuthState()
    }
  },
  mounted() {
    this.listenToAuthStatus()
  }
}
</script>
