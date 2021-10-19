<template>
  <v-card outlined flat class="card">
    <div class="imgBox">
      <img src="" alt="" />
      <v-chip outlined class="ma-0" color="white"> {{ category }} </v-chip>
    </div>
    <v-card-title class="title d-flex flex-column align-start">
      {{ title }}
    </v-card-title>
    <v-card-text class="mb-1">
      <div class="subtitle-2 mb-2">{{ date }}</div>
      <div>{{ desc }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      // default: "./images/ArticleDefault.jpg",
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: "general"
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
}
.v-chip {
  height: 23px;
}
.title {
  font-weight: bold;
}
.imgBox {
  position: relative;
  img {
    background: #252a2e;
    width: 100%;
    height: 250px;
  }
  .v-chip {
    position: absolute;
    z-index: 3;
    left: 15px;
    top: 15px;
  }
}
</style>
