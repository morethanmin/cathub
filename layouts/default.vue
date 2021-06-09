<template>
  <v-app>
    <Mobile class="mobile"></Mobile>
    <Header class="header"></Header>

    <Nav />
    <v-main>
      <v-container class="common-wrapper">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <v-divider></v-divider>
      <Footer />
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.main {
  margin-top: 40px;
}
.header {
  display: block;
}
.mobile {
  display: none;
}

@media (max-width: $vt_sm) {
  .header {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
}
</style>

<script>
export default {
  mounted() {
    console.log(this);
  }
};
</script>
