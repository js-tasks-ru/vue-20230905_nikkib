<template>
  <div class="toasts">
    <UiToast v-for="(toast, index) in toasts" 
      :key="index" 
      :toastType="toast.type" 
      :message="toast.message"
      @close="close(index)"/>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  data() {
    return {
      toasts: []
    }
  },

  components: { UiToast },

  methods: {
    success(message) {
      this.toasts.push({type: "success", message});

      setTimeout(() => {
        this.toasts.shift();
      }, 5000);
    },

    error(message) {
      this.toasts.push({type: "error", message});

      setTimeout(() => {
        this.toasts.shift();
      }, 5000);
    },

    close(index) {
      this.toasts.splice(index, 1);
    },
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
