<template>
  <v-card outlined flat>
    <v-card-title class="text-subtitle-2">
      <v-icon>{{ icon }}</v-icon>
      <NuxtLink :to="link">
        <div class="pinned-link">{{ title }}</div>
      </NuxtLink>
    </v-card-title>
    <v-card-text class="text-body-2 color_secondary">
      {{ subtitle }}
    </v-card-text>
    <v-card-text class="pt-0 color_secondary"> {{ desc }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "mdi-book-outline",
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
    desc: {
      type: String,
      required: false,
      default: "",
    },
    link: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.pinned-link {
  color: #0366d6;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
}
.pinned-link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>