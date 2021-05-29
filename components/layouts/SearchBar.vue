<template>
  <div class="search-box ml-5">
    <input
      :class="[...(searchBarActivated ? ['search-activated'] : [])]"
      class="search"
      v-on:focus="focus = true"
      v-on:blur="focus = false"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search or jump to..."
    />
    <ul
      v-on:mouseover="hover = true"
      v-on:mouseout="hover = false"
      class="result"
      v-if="searchBarActivated"
    >
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink class="d-flex align-center" :to="`/archive/${article.slug}`">
          <v-icon class="text-h6">mdi-cube-outline</v-icon>
          <span class="text-subtitle-2">
            {{ article.title }}
          </span>
        </NuxtLink>
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
      hover: false,
    };
  },
  computed: {
    searchBarActivated() {
      const activated = this.focus || this.hover;
      return activated;
    },
  },
  methods: {},
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = await this.$content("articles").fetch();
      } else {
        this.articles = await this.$content("articles")
          .limit(1)
          .search(searchQuery)
          .fetch();
      }
    },
  },
  async mounted() {
    this.articles = await this.$content("articles").fetch();
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  z-index: 99;
  position: relative;
}
.search {
  color: white;
  border: 1px solid #444d56;
  background-color: #252a2e;
  height: 1rem;
  padding: 12px;
  width: 200px;
  border-radius: 8px;
  transition: width 0.25s ease;
  /* transition: background-color 0.25s step-end; */
}
.search-activated {
  width: 350px;
  border: none;
  outline: none;
  color: black;
  background-color: white;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.result {
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
</style>
