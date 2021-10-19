<template>
  <button @click="$emit(`click`)" class="rounded-lg btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  color: BLACK;
  border: 1px solid #e2e3e4;
  background-color: #fafbfc;
}
</style>
