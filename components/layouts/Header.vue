<template>
  <div class="header d-flex flex-row justify-space-between">
    <div class="header-mainBox d-flex flex-row align-center">
      <a class="d-flex flex-row align-center" href="/">
        <v-icon>mdi-cat</v-icon>
        <!-- <span class="text-h6"> Cathub </span> -->
      </a>
      <search-bar />

      <div
        class="header-nav d-flex flex-row align-center text-body-2 font-weight-bold"
      >

        <NuxtLink v-for="(category, index) of categories" :key="index" class="ml-4" :to="`/archive/category/${category.name}`">
          {{category.name}}
        </NuxtLink>
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
  data:()=>({
    categories:[]
  }),
  methods:{
    async getContent() {
      const { $content } = this
      this.categories = await $content("categories")
      .only(["name"])
      .fetch();

    }
  },
  async mounted() {
    await this.getContent()
  },
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
.header-mainBox {
  color: white;
}
.header-mainBox .v-icon {
  color: white;
  font-size: 2rem;
}

.header-itemBox .v-icon {
  color: white;
  font-size: 1.2rem;
}
</style>