<template>
  <div>
    <v-row>
      <v-col cols="9">
        <div class="articleBox">
          <div class="header">
            <div class="contents pa-3">
              <v-icon class="icon">mdi-format-list-bulleted</v-icon>
              <div class="name">{{ article.title }}</div>
            </div>
          </div>
          <!-- <div>{{ article.description }}</div> -->
          <!-- <img :src="article.img" :alt="article.alt" /> -->
          <!-- <p>Article last updated: {{ formatDate(article.updatedAt) }}</p> -->

          <div>
            <nuxt-content class="py-3 px-7" :document="article" />
          </div>
          <!-- <category :category="article.category" /> -->
        </div>
      </v-col>
      <v-col cols="3">
        <nav>
          <ul>
            <li
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3
              }"
              v-for="link of article.toc"
              :key="link.id"
            >
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <prev-next :prev="prev" :next="next" />
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.articleBox {
  border: 1px solid #e1e4e8;
  border-radius: 10px;

  .header {
    border-bottom: 1px solid #e1e4e8;
    .contents {
      display: flex;
      align-items: center;
      gap: 10px;
      .icon {
        font-size: 1rem;
        color: black;
      }
      .name {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
}
</style>
<script>
export default {
  layout: "detail",
  props: {
    article: {
      type: Object,
      default: () => {}
    },
    prev: {
      type: Object,
      default: () => {}
    },
    next: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({}),
  mounted() {}
};
</script>
