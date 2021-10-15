<template>
  <div>
    <v-row>
      <v-col sm="12" md="9" class="mainsection">
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

          <div class="content">
            <nuxt-content :document="article" />
          </div>
          <!-- <category :category="article.category" /> -->
        </div>
      </v-col>
      <v-col sm="12" md="3" class="sidesection">
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
        <PrevNext :prev="prev" :next="next" />
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.content {
  padding: 20px 15px;
}
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
@media (max-width: $vt_sm) {
  .mainsection {
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  .articleBox {
    border-radius: 0;
  }
  .sidesection {
    display: none;
  }
  .content {
    padding: 10px 5px;
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
