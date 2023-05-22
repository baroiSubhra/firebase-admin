<template>
  <button class="btn" :class="{ 'btn-disabled': disabled }" :disabled="disabled">
    {{ text }}
    <ArrowRight v-if="!submitting" />
    <Spinner v-else />
  </button>
</template>

<script>
import ArrowRight from './icons/ArrowRight.vue'
import Spinner from './icons/Spinner.vue'
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    submitting: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  components: {
    ArrowRight,
    Spinner
  }
}
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  padding: 12px 20px;
  gap: 8px;
  background: #15141b;
  border: none;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #667085;
}

.btn:not(.btn-disabled) {
  color: #ffffff;
}

.btn:not(.btn-disabled):hover {
  background: #21202b;
  color: #ffffff;
}

.btn-disabled {
  cursor: not-allowed;
}
</style>
