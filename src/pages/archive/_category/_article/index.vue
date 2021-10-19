<template>
  <Article :article="article" :prev="prev" :next="next" />
</template>
<style lang="scss" scoped></style>
<script>
export default {
  layout: "detail",
  async asyncData({ $content, params }) {
    const article = await $content(
      "articles",
      params.category,
      params.article,
      {
        deep: true
      }
    ).fetch();

    const [prev, next] = await $content("articles", params.category, {
      deep: true
    })
      .only(["title", "slug", "category"])
      .sortBy("createdAt", "asc")
      .surround(params.article)
      .fetch();

    return {
      article,
      prev,
      next
    };
  },
  data: () => ({}),
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: this.article.description,
          name: this.article.title,
          content: this.article.description
        }
      ]
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  mounted() {}
};
</script>
