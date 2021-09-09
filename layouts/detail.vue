<template>
  <v-app>
    <Mobile class="mobile"></Mobile>
    <Header class="header"></Header>
    <v-main app>
      <div class="title">
        <div class="wrapper">
          <NuxtLink to="/archive" class="link prev">morethanmin</NuxtLink>
          <div class="gray">/</div>
          <NuxtLink
            :to="`/archive/${category}`"
            :class="[`link`, article ? `prev` : null]"
            >{{ category }}</NuxtLink
          >
          <div v-if="article" class="gray">/</div>
          <div v-if="article" class="link">{{ article }}</div>
        </div>
      </div>
      <v-container class="common-wrapper">
        <nuxt :category="category" />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <v-divider></v-divider>
      <Footer />
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
}
.mobile {
  display: none;
}
.title {
  background-color: #f6f8fa;
  border-bottom: 1px solid #d8dee3;
  .prev {
    font-weight: 500;
  }
  .wrapper {
    display: flex;
    gap: 3px;
    padding: 20px;
  }
}
.gray {
  color: #57606a;
}

@media (max-width: $vt_sm) {
  .header {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
}
</style>

<script>
export default {
  data: () => ({
    category: "",
    article: undefined
  }),
  watch: {
    "$route.params.category"() {
      this.category = this.$route.params.category;
    },
    "$route.params.article"() {
      this.article = this.$route.params.article;
      console.log(this.article);
    }
  },
  mounted() {
    this.category = this.$route.params.category;
    this.article = this.$route.params.article;
    console.log(this.article);
  }
};
</script>
