<template>
  <div class="header d-flex flex-row justify-space-between">
    <div class="header-mainBox d-flex flex-row align-center">
      <NuxtLink class="d-flex flex-row align-center" to="/">
        <v-icon>mdi-cat</v-icon>
        <span class="text-h6"> Cathub </span>
      </NuxtLink>

      <input
        class="header-search rounded-lg pa-3 ml-5"
        type="text"
        placeholder="Search or jump to..."
      />
      <div
        class="header-nav d-flex flex-row align-center text-body-2 font-weight-bold"
      >
        <div class="ma-3">Pull requests</div>
        <div class="ma-0">Issues</div>
        <div class="ma-3">Marketplace</div>
        <div>Explore</div>
      </div>
    </div>
    <div class="header-itemBox d-flex flex-row align-center">
      <v-icon>mdi-bell-outline</v-icon>
      <v-icon>mdi-plus</v-icon>
      <v-icon>mdi-menu-down</v-icon>
      <img
        src="/imgs/face.jpg"
        alt="face"
        width="30"
        height="30"
        style="border-radius: 50%"
      />
      <v-icon>mdi-menu-down</v-icon>
    </div>
  </div>
</template>

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
.header-search {
  color: white;
  border: 1px solid #444d56;
  height: 1rem;
  width: 200px;

  transition: width 0.25s;
}
.header-search:focus {
  width: 350px;
  color: black;
  background-color: white;
}
</style>