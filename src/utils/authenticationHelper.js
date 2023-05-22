import { auth } from '@/utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import localstorage from '@/utils/localstorage_helper'
import router from '../router'

function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid
      localstorage.set_token(true)
      router.push('/dashboard')
    } else {
      localstorage.set_token(false)
      router.push('/')
    }
  })
}
export { checkAuthState }
