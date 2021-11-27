<template>
  <div
    :class="[
      `search-box`,
      ...(searchQuery && !!articles.length ? ['search-activated'] : [])
    ]"
  >
    <input
      :class="[`search`]"
      class="search-input"
      v-on:focus="focus = true"
      v-on:blur="focus = false"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search articles..."
    />
    <ul
      v-on:mouseover="hover = true"
      v-on:mouseout="hover = false"
      class="result-box"
      v-if="!!articles.length"
    >
      <li v-for="article of articles" :key="article.slug">
        <div
          class="result-item d-flex align-center"
          @click="handleClick(article)"
        >
          <v-icon class="icon">mdi-cube-outline</v-icon>
          <span class="text-subtitle-2">
            {{ article.title }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: [],
      focus: false,
      hover: false
    };
  },
  computed: {
    searchBarActivated() {
      const activated = this.focus || this.hover || !!this.searchQuery;
      return activated;
    }
  },
  methods: {
    handleClick(article) {
      this.focus = false;
      this.hover = false;
      this.searchQuery = "";
      this.articles = [];
      this.$router.push(`/archive/${article.category}/${article.slug}`);
    }
  },
  watch: {
    focus() {
      if (!this.focus) {
        if (!this.hover) {
          this.searchQuery = "";
          this.articles = [];
        }
      }
    },
    hover() {
      if (!this.hover) {
        if (!this.focus) {
          this.searchQuery = "";
          this.articles = [];
        }
      }
    },
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
      } else {
        this.articles = await this.$content("articles", { deep: true })
          .limit(5)
          .search(searchQuery)
          .sortBy("createdAt", "desc")
          .fetch();
      }
    }
  },
  async mounted() {
    // this.articles = await this.$content("articles", { deep: true })
    //   .limit(5)
    //   .sortBy("createdAt", "desc")
    //   .fetch();
  }
};
</script>

<style lang="scss" scoped>
.icon {
  transition: none;
}
.result-item {
  cursor: pointer;
}
.search-box {
  z-index: 15;
  position: relative;
  width: 200px;
  transition: width 0.25s ease;
}
.search-input {
  color: white;
  border: 1px solid #444d56;
  background-color: #252a2e;
  height: 1rem;
  padding: 12px;
  width: 100%;
  outline: none;
  border-radius: 8px;
}
.search-activated {
  width: 350px;
  .search-input {
    background-color: white;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border: none;
    color: black;
  }
}
.result-box {
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
  z-index: 99;
  position: absolute;
  min-height: 300px;
  width: 100%;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  list-style: none;
  padding-left: 0px;
  li {
    border-bottom: 1px solid #e4e4e4;
  }
  li,
  .v-icon {
    color: black;
    padding: 6px;
  }
  li:hover {
    background: #0366d6;
    color: white;
    .v-icon {
      transition: none;
      color: white;
    }
  }
}
@media (max-width: $vt_sm) {
  .search-box {
    width: 100%;
  }
}
</style>
