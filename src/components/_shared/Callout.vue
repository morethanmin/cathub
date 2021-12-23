<template>
  <div class="callout px-3 py-5 mb-5">💡 {{ text }}</div>
</template>

<style lang="scss" scoped>
.callout {
  background: rgba(245, 245, 245, 0.93);
  border-radius: 5px;
  font-size: 0.9rem;
}
</style>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
};
</script>
