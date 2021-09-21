<template>
  <v-row class="row-box">
    <v-col cols="9" v-if="articles.length > 0">
      <div class="mainBox mt-5">
        <div class="mainBoxHeader">
          header
        </div>
        <div v-for="article in articles" :key="article.slug">
          <NuxtLink :to="`/archive/${category}/${article.slug}`">
            <!-- <img :src="article.img" :alt="article.alt" /> -->
            <div class="mainBoxConetnt">
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
          <v-divider></v-divider>
        </div>
      </div>
    </v-col>
    <v-col cols="9" v-else>
      작성된 게시글이 없습니당.
    </v-col>
    <v-col cols="3">
      <div class="mt-5">
        <div>About</div>
        <div>카테고리 소개</div>
      </div>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.mainBox {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  height: 100%;
}
.mainBoxHeader {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #f6f8fa;
  padding: 10px;
  border-bottom: 1px solid #d0d7de;
}
.mainBoxConetnt {
  padding: 10px;
}
.row-box {
  height: 100%;
}
</style>
<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    category: {
      type: String,
      default: ""
    }
  },
  data: () => ({}),
  content: {},
  mounted() {},
  methods: {}
};
</script>
