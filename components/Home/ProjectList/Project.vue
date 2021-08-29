<template>
  <v-card outlined flat>
    <v-card-title class="text-subtitle-2 pb-1">
      <v-icon>{{ icon }}</v-icon>
      <a :href="link" target="_blank">
        <div class="pinned-link">{{ title }}</div>
      </a>
    </v-card-title>
    <v-card-text class="text-body-2 color_secondary">
      {{ subtitle }}
    </v-card-text>
    <v-card-text class="pt-0 color_secondary d-flex">
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
      default: ""
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    subtitle: {
      type: String,
      required: false,
      default: ""
    },
    langueges: {
      type: Array,
      required: false,
      default: () => []
    },
    link: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
}
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
