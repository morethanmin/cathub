<template>
  <Archive
    :categories="extendedCategories"
    :searchInput="searchInput"
    :onChange="onChange"
  />
</template>

<style lang="scss" scoped></style>
<script>
const formatDate = function(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};

export default {
  async asyncData({ $content, params }) {
    // const articles = (
    //   await $content("articles", { deep: true })
    //     .sortBy("createdAt", "desc")
    //     .fetch()
    // ).map(article => {
    //   let extendedArticle = article;
    //   extendedArticle.createdAt = formatDate(article.createdAt);
    //   return extendedArticle;
    // });
    // const articlesDateList = articles.map(article => article.createdAt);
    // const parsedDate = articlesDateList.map(articleDate => {
    //   const date = new Date(articleDate);
    //   return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
    //     -2
    //   )}-${`0${date.getDate()}`.slice(-2)}`;
    // });
    // const data = {};
    // parsedDate.forEach(x => {
    //   data[x] = (data[x] || 0) + 1;
    // });
    // const total = articlesDateList.length;
    // const categories = (
    //   await $content("categories")
    //     .sortBy("createdAt", "asc")
    //     .fetch()
    // ).map(category => {
    //   let extendedCategory = category;
    //   extendedCategory.createdAt = formatDate(category.createdAt);
    //   extendedCategory.updatedAt = formatDate(category.updatedAt);
    //   return extendedCategory;
    // });
    // const test = await $content("articles", { deep: true }).fetch();
    // let categorySet = new Set();
    // test.map(i => {
    //   let category = i.dir.split("/")[2];
    //   categorySet.add(category);
    // });
    // console.log(categorySet);
    // return {
    //   categories : Array.from(categorySet)
    // };
  },
  data: () => ({
    searchInput: "",
    categories: []
  }),
  computed: {
    extendedCategories() {
      return this.categories.map(category => {
        let extendedCategory = category;
        extendedCategory.createdAt = formatDate(category.createdAt);
        return extendedCategory;
      });
    }
  },
  methods: {
    onChange(input) {
      this.searchInput = input;
    }
  },
  watch: {
    async searchInput(searchInput) {
      if (!searchInput) {
        this.categories = await this.$content("categories").fetch();
      } else {
        this.categories = await this.$content("categories")
          .search(searchInput)
          .fetch();
      }
    }
  },
  async mounted() {
    this.categories = await this.$content("categories").fetch();
  }
};
</script>
