<template>
  <div>
    <img :src="src" :width="width" :height="height" alt="" />
  </div>
</template>
<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 90
    },
    height: {
      type: Number,
      default: 20
    }
  }
};
</script>
