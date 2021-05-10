<template>
  <v-app>
    <v-app-bar flat class="layout-header" hide-on-scroll app>
      <div class="layout-header-logo">
        <v-icon>mdi-cat</v-icon>
       until-dev
      </div>
      
      <template class="layout-header-template" v-slot:extension>
        <v-container class=" common-wrapper">
          <v-row class="pleft" justify="center" align="center">
            <v-col class="pl-5 pr-3" cols="3"></v-col>
            <v-col align-self="end" class="pr-5 pl-3" cols="9">
              <div class="mt-2 d-flex flex-row">
                <div class="mr-6"><button><v-icon>mdi-book-open-outline</v-icon>Overview</button></div>
                <div class="mr-6"><button><v-icon>mdi-book-outline</v-icon>Repositories</button></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
    <v-main app>
      <v-container class="main common-wrapper">
        <nuxt />
      </v-container>
    </v-main>
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
.layout-header-logo{
  color: white;
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
