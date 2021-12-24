<template>
  <v-app>
    <Mobile class="mobile"></Mobile>
    <Header class="header"></Header>
    <Nav />
    <v-main app>
      <v-container class="common-wrapper">
        <v-row class="" justify="center" align="center">
          <v-col align-self="start" class="card col-info pa-5" sm="12" md="3">
            <Profile />
          </v-col>
          <v-col class="card align-self-start pa-5" sm="12" md="9">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-divider></v-divider>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
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
  .card {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>

<script>
export default {
  mounted() {}
};
</script>
