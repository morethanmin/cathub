<template>
  <div class="">
    <div class="d-flex justify-space-between">
      <NuxtLink :to="`${link}`" class="text-h6 pinned-link">{{
        title
      }}</NuxtLink>
      <button class="subtitle-1"></button>
    </div>
    <div class="mb-3 desc color_secondary">
      {{ desc }}
    </div>
    <div class="d-flex subdesc mb-3 color_secondary">
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
  color: #0366d6 !important;
  font-weight: 700 !important;

  :hover {
    cursor: pointer;
  }
}
.pinned-link:hover {
  cursor: pointer;
  text-decoration: underline;
}

.desc {
  font-size: 0.9rem;
}
.subdesc {
  font-size: 0.8rem;
}
</style>
