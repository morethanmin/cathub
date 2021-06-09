<template>
  <div class="header">
    <div class="header-mainBox">
      <NuxtLink class="d-flex flex-row align-center" to="/">
        <v-icon>mdi-cat</v-icon>
        <span class="title-text text-h6"> Cathub </span>
      </NuxtLink>
      <div class="search d-flex align-center">
        <search-bar />
      </div>

      <div
        class="header-nav d-flex flex-row align-center text-body-2 font-weight-bold"
      >
        <!-- <NuxtLink
          v-for="(category, index) of categories"
          :key="index"
          class="ml-4"
          :to="`/archive/category/${category.name}`"
        >
          {{ category.name }}
        </NuxtLink> -->
      </div>
    </div>
    <div class="header-itemBox d-flex flex-row align-center">
      <!-- <v-icon>mdi-bell-outline</v-icon>
      <v-icon>mdi-plus</v-icon>
      <v-icon>mdi-menu-down</v-icon> -->
      <toggle />
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  data: () => ({
    categories: []
  }),
  methods: {
    async getContent() {
      const { $content } = this;
      this.categories = await $content("categories")
        .only(["name"])
        .fetch();
    }
  },
  async mounted() {
    await this.getContent();
  },
  components: {
    SearchBar
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #252a2e;
  color: white;
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.header-mainBox {
  color: white;
  display: flex;
  align-content: center;
  margin-left: 20px;
  //  d-flex flex-row align-center
}
.header-itemBox {
  > * {
    margin-right: 15px;
  }
}
.header-nav {
}

.header-mainBox .v-icon {
  color: white;
  font-size: 2rem;
}

.header-itemBox .v-icon {
  color: white;
  font-size: 1.2rem;
}

.header-nav::-webkit-scrollbar {
  display: none;
}

@media (max-width: $vt_sm) {
  .search {
    display: none !important;
  }
  .header-nav {
    display: none !important;
  }
}
</style>
