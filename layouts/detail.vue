<template>
  <v-app>
    <Header />
    <v-main app>
      <v-container class="common-wrapper">
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
.main {
  margin-top: 40px;
}
</style>

<script>
export default {};
</script>
