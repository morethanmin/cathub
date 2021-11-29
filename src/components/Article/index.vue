<template>
  <div>
    <v-row>
      <v-col sm="12" md="9" class="mainsection">
        <div class="articleBox">
          <div class="header">
            <div class="contents pa-3">
              <v-icon class="">mdi-text-box-outline</v-icon>
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

        <div class="commentBox"></div>
      </v-col>
      <v-col sm="12" md="3" class="sidesection">
        <div class="nav">
          <div v-if="article.toc.length" class="navheader pb-1">Navigation</div>
          <div
            v-for="link of article.toc"
            :key="link.id"
            :class="{
              'py-1': link.depth === 2,
              'ml-2 py-1': link.depth === 3,
            }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </div>
          <!-- <PrevNext :prev="prev" :next="next" /> -->
        </div>
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
        font-size: 1.2rem;
        color: black;
      }
      .name {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
}

.sidesection {
  position: relative;
  .nav {
    position: fixed;
    top: 25%;
    transform: translate(0, 0%);
    color: #24292f;
    font-size: 0.9rem;
    .navheader {
      color: black;
      font-size: 1rem;
      font-weight: bold;
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
    padding: 5px;
  }
}
</style>
<script>
export default {
  layout: "detail",
  props: {
    article: {
      type: Object,
      default: () => {},
    },
    prev: {
      type: Object,
      default: () => {},
    },
    next: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
  mounted() {
    const scriptTag = document.createElement("SCRIPT");
    scriptTag.setAttribute("type", "application/javascript");
    scriptTag.setAttribute("src", "https://utteranc.es/client.js");
    scriptTag.setAttribute("repo", "morethanmin/cathub");
    scriptTag.setAttribute("issue-term", "title");
    scriptTag.setAttribute("label", "Comment");
    scriptTag.setAttribute("theme", "github-light");
    scriptTag.setAttribute("crossorigin", "anonymous");
    scriptTag.setAttribute("async", "async");
    this.$el.querySelector(".commentBox").append(scriptTag);
  },
};
</script>
