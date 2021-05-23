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
        <div class="ma-3">Javascript</div>
        <div class="ma-0">CSS</div>
        <div class="ma-3">React</div>
        <div class="ma-0">Vue</div>
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