<template>
  <v-card outlined flat class="card">
    <v-img height="250" :src="image"></v-img>

    <v-card-title class="pb-1 d-flex flex-column align-start">
      <div>
        <v-chip class="ma-0" color=""> {{ category }} </v-chip>
      </div>
      <div>{{ title }}</div>
    </v-card-title>
    <v-card-text>
      <div class="subtitle-2">{{ date }}</div>
      <div>{{ desc }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "./images/ArticleDefault.jpg",
    },
    title: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "general",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
}
.v-chip {
  height: 23px;
}
</style>