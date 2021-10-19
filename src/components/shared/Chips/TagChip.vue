<template>
  <div class="chip">{{ text }}</div>
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
.chip {
  padding: 5px 10px;
  background: #f1f8ff;
  color: #0366d6;
  border-radius: 15px;
  font-weight: 700;
  word-break: nowrap;
  width: fit-content;
  white-space: nowrap;
}
</style>
