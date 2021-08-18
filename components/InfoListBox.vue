<template>
  <div class="">
    <div class="d-flex justify-space-between">
      <div class="text-h6 pinned-link">{{ title }}</div>
      <button class="subtitle-1"></button>
    </div>
    <div class="mb-3 color_secondary">
      {{ desc }}
    </div>
    <div class="d-flex body-2 mb-3">
      <div>{{ createdAt }}</div>
      <button></button>
    </div>
    <v-divider class="mt-5 mb-5"></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    createdAt: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.pinned-link {
  color: #0366d6;
  font-weight: bold !important;

  :hover {
    cursor: pointer;
  }
}
.pinned-link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
