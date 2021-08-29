<template>
  <v-app>
    <Mobile class="mobile"></Mobile>
    <Header class="header"></Header>
    <Nav />
    <v-main>
      <v-container class="common-wrapper">
        <v-row class="" justify="center" align="center">
          <v-col align-self="start" class="card col-info pa-5" sm="12" md="3">
            <Profile />
          </v-col>
          <v-col class="card align-self-start pa-5" sm="12" md="9">
            <nuxt />
          </v-col>
        </v-row>
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
  mounted() {}
};
</script>
