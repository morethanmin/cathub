<template>
  <v-card
    :class="` ${$vuetify.theme.dark ? `theme--dark` : `theme--light`}`"
    outlined
    flat
  >
    <v-card-title class="text-subtitle-2 pb-1">
      <v-icon>{{ icon }}</v-icon>
      <a :href="href" target="_blank">
        <div class="link">{{ title }}</div>
      </a>
    </v-card-title>
    <v-card-text class="ft-4 text-body-2">
      {{ subtitle }}
    </v-card-text>
    <v-card-text class="pt-0 d-flex">
      <languege-chip
        v-for="(languege, index) in langueges"
        :key="index"
        :name="languege.name"
        :color="languege.color"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
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
    langueges: {
      type: Array,
      required: false,
      default: () => [],
    },
    href: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;

  .v-card__text {
    color: #586069;
  }
  &.theme--dark {
    .v-card__text {
      color: #8b949e;
    }
  }
}
</style>
