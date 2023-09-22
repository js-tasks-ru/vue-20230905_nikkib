<template>
  <div class="toast" :class="'toast_' + toastType">
    <UiIcon class="toast__icon" :icon=toastIcon />
    <span>{{ message }}</span>
    <button type="button" @click="$emit('close')">X</button>
  </div>  
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToast',

  components: { UiIcon },

  props: {
    toastType: {
      type: String,
      required: true,
    },
    message: {
      type: String
    }
  },

  emits: ['close'],

  computed: {
    toastIcon() {
      return this.toastType == "success" ? "check-circle" : "alert-circle"
    }
  },

 
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

button {
  margin-left: 10px;
}
</style>
