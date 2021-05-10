<template>
  <v-app>
    <v-app-bar flat class="layout-header" hide-on-scroll app>
      until-dev
      <template class="layout-header-template" v-slot:extension>
        <v-container class=" common-wrapper">
          <v-row class="" justify="center" align="center">
            <v-col class="" cols="3"></v-col>
            <v-col align-self="end" class=" pa-0" cols="9">
              <div class=" d-flex flex-row">
                <div class="">Overview</div>
                <div class="">Repositories</div>
                <div class="">Projects</div>
                <div class="">Packages</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
    <v-content app>
      <v-container class="main common-wrapper">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.layout-header {
  display: block !important;
  background-color: #252a2e !important;
  color: white !important;
}
.layout-header-template {
}
.layout-nav {
  position: fixed;
  width: 100%;
  color: #252a2e;
  background-color: white !important;
  border-bottom: 1px solid black;
  //height: 100%;
}
.main {
  margin-top: 40px;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
