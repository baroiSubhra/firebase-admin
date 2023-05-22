<template>
  <div class="input-wraper">
    <div class="input-icon-holder">
      <Email class="input-icon" v-if="iconName == 'email'" />
      <User class="input-icon" v-else />
    </div>
    <input
      :type="inputType"
      :id="id"
      class="input-modifer"
      :class="{ 'input-disabled': disabled }"
      :placeholder="placeholder"
      :disabled="disabled"
      autocomplete="off"
      :autofocus="autofocus"
      v-model="vmodelBindingValue"
    />
  </div>
</template>

<script>
import Email from './icons/Email.vue'
import User from './icons/User.vue'
export default {
  components: {
    Email,
    User
  },
  props: {
    modelValue: null,
    iconName: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    inputType: {
      type: String,
      default: 'email'
    },
    placeholder: {
      type: String,
      default: 'email@serviceprovider.com'
    },
    disabled: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    vmodelBindingValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  }
}
</script>

<style scoped>
.input-wraper {
  position: relative;
  margin-bottom: 1rem;
}

.input-icon-holder {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 0.75rem;
  align-items: center;
  pointer-events: none;
}
.input-icon {
  color: #ffffff;
  width: 1.25rem;
  height: 1.25rem;
}

.input-modifer {
  display: block;
  padding: 0.625rem;
  padding-left: 2.5rem;
  background-color: #07080c;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #15141b;
}

.input-modifer:focus {
  outline: none;
  /* box-shadow: #ffffff; */
  background-color: #15141b;
  color: #ffffff;
}

.input-modifer:not(:placeholder-shown) {
  background-color: #15141b;
}

.input-modifer:autofill,
.input-modifer:-webkit-autofill {
  appearance: none;
  background: none;
  background-color: #15141b !important;
  color: #ffffff !important;
}

.input-wraper:has(.input-modifer:not(:placeholder-shown), .input-modifer:focus) .input-icon {
  color: #ffffff;
}

.input-wraper:has(.input-disabled) .input-icon {
  color: #6b7280;
}
</style>
