<template>
  <div class="wrapper">
    <div class="img-holder">
      <img src="@/assets/images/logo.webp" alt="logo of dezie.page" />
    </div>
    <div class="form-area">
      <Input
        iconName="email"
        id="email"
        inputType="email"
        placeholder="Enter you email"
        v-model="email"
        :disabled="false"
        :autofocus="true"
      />
      <Input
        iconName="user"
        id="user"
        inputType="password"
        placeholder="Enter you password"
        :disabled="!isEmailValid"
        v-model="password"
      />
      <Button @click="signIn" :disabled="false" :submitting="submitting" text="Login" />
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { validateEmail } from '@/utils/helpers'
import { auth } from '../utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { checkAuthState } from '@/utils/authenticationHelper'
import localstorage from '@/utils/localstorage_helper'
export default {
  components: {
    Input,
    Button
  },
  data() {
    return {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordEntered: false,
      submitting: false
    }
  },
  methods: {
    routeToDashboard() {
      this.$router.push('/dashboard')
    },
    listenToAuthStatus() {
      if (localstorage.is_token_valid()) {
        this.routeToDashboard()
      }
    },
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
        })
    }
  },
  watch: {
    password(newPassword, oldPassword) {
      const enteredPassword = String(newPassword)
      if (enteredPassword.length > 0) this.isPasswordEntered = true
      else this.isPasswordEntered = false
    },
    email(newEmail, oldEmail) {
      const enteredEmail = String(newEmail)
      if (enteredEmail.length > 2 && validateEmail(enteredEmail)) this.isEmailValid = true
      else this.isEmailValid = false
    }
  },
  mounted() {
    this.listenToAuthStatus()
  }
}
</script>

<style scoped>
.wrapper {
  min-width: 320px;
}
</style>
