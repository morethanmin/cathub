<template>
  <v-app>
    <v-app-bar flat class="header" hide-on-scroll app>
      <Header />
    </v-app-bar>
    <v-main app>
      <v-container class="main common-wrapper">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <v-divider></v-divider>

      <Footer />
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.header {
  background-color: #252a2e !important;
  color: white !important;
}

.main {
  margin-top: 40px;
}
</style>

<script>
import Header from "~/components/layouts/Header.vue";
import Footer from "~/components/layouts/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
