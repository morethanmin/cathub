<template>
  <div>
    <div v-if="articles.length > 0">
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="`/archive/${category}/${article.slug}`">
            <!-- <img :src="article.img" :alt="article.alt" /> -->
            <div>
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <p>{{ article.updatedAt }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      작성된 게시글이 없습니당.
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
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
