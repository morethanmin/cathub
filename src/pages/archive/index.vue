<template>
  <Archive
    :parsedDate="parsedDate"
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
const parseDate = function(date) {
  //return 0000-00-00
  return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
    -2
  )}-${`0${date.getDate()}`.slice(-2)}`;
};

export default {
  async asyncData({ $content, params }) {
    //category 이름 가져오기
    const categoriesData = await $content("categories")
      .only("name")
      .fetch();
    //category이름에 맞는 article date 가져오기
    const articlesData = await Promise.all(
      categoriesData.map(item => {
        return $content("articles", { deep: true })
          .where({ category: item.name })
          .only("createdAt")
          .fetch();
      })
    );

    const parsedDate = categoriesData.map((item, index) => {
      const dates = articlesData[index].map(article => {
        const date = new Date(article.createdAt);
        return parseDate(date);
      });
      return {
        name: item.name,
        dates: dates
      };
    });
    return { parsedDate };
  },
  head() {
    return {
      title: `archive - morethanmin`,
      meta: [
        {
          hid: this.category.description,
          name: `archive - morethanmin`,
          content: this.category.description
        }
      ]
    };
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
    },
    async getCategories(input) {
      let categories = [];
      if (!input) {
        categories = await this.$content("categories").fetch();
      } else {
        categories = await this.$content("categories")
          .search(input)
          .fetch();
      }

      return categories;
    }
  },
  watch: {
    async searchInput(searchInput) {
      this.categories = await this.getCategories(searchInput);
    }
  },
  async mounted() {
    this.categories = await this.getCategories();
  }
};
</script>
