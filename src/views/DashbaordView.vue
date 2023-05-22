<template>
  <div class="dashboard">
    <div class="img-holder">
      <img src="@/assets/images/logo.webp" alt="logo of dezie.page" />
    </div>
    <div class="subsection">
      <h3 class="subsection-elements">Count - {{ cardData.length }}</h3>
      <div class="subsection-elements">
        <div class="subsection-elements-btn">
          <Button @click="download" text="Download" :disabled="loadingData" />
          <Button @click="logout" text="Logout" :disabled="false" />
        </div>
      </div>
    </div>
    <div>
      <Table v-if="!loadingData" :dataList="cardData" />
      <div class="loading-area" v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '../components/Table.vue'
import Button from '../components/Button.vue'
import Spinner from '@/components/icons/Spinner.vue'
import { auth, db } from '../utils/firebase'
import localstorage from '@/utils/localstorage_helper'
import { signOut } from 'firebase/auth'
import { collection, getDocs, query } from 'firebase/firestore'
export default {
  components: {
    Table,
    Button,
    Spinner
  },
  data() {
    return {
      cardData: '',
      loadingData: true
    }
  },
  methods: {
    logout() {
      signOut(auth)
        .then(() => {
          localstorage.set_token(false)
        })
        .catch((error) => {})
    },
    async fetchRecords() {
      const q = query(collection(db, import.meta.env.VITE_collection_name))
      this.loadingData = true
      const result = await getDocs(q)
      this.cardData = result.docs.map((doc) => {
        const { name, email } = doc.data()
        return { name, email }
      })
      this.loadingData = false
    },
    objectToCsv(data) {
      return data
        .map((row) => {
          let ar = [String(row.name), String(row.email)]
          ar = ar.join(',')
          return ar
        })
        .join('\r\n')
    },
    downloadBlob(content, filename, contentType) {
      var blob = new Blob([content], { type: contentType })
      var url = URL.createObjectURL(blob)
      var pom = document.createElement('a')
      pom.href = url
      pom.setAttribute('download', filename)
      pom.click()
      element.remove()
    },
    download() {
      this.downloadBlob(this.objectToCsv(this.cardData), 'waitlist.csv', 'text/csv;charset=utf-8;')
    }
  },
  mounted() {
    this.fetchRecords()
  }
}
</script>

<style scoped>
.dashboard {
  width: 100%;
}

.subsection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
}

.subsection-elements-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.loading-area {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
