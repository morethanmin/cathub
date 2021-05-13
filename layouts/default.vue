<template>
  <v-app>
    <v-app-bar flat class="header" hide-on-scroll app>
      <div class="header-mainBox d-flex flex-row align-center">
        <NuxtLink class="d-flex flex-row align-center" to="/">
          <v-icon>mdi-cat</v-icon>
          <span class="text-h6">
            Cathub
          </span>
        </NuxtLink>

        <input
          class="header-search rounded-lg pa-3 ml-5"
          type="text"
          placeholder="Search or jump to..."
        />
        <div
          class="header-nav d-flex flex-row align-center text-body-2 font-weight-bold"
        >
          <div class="ma-3 ">Pull requests</div>
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
          style="border-radius: 50%;"
        />
        <v-icon>mdi-menu-down</v-icon>
      </div>

      <template class="header-template" v-slot:extension>
        <v-container class=" common-wrapper">
          <v-row class="pleft" justify="center" align="center">
            <v-col class="pl-5 pr-3" cols="3">
              <transition name="fade">
                <div
                  v-if="$store.getters.getIsOvered"
                  class="d-flex align-center"
                >
                  <img
                    src="/imgs/face.jpg"
                    alt="face"
                    width="30"
                    height="30"
                    style="border-radius: 50%;"
                  />
                  <span class="ml-2 font-weight-bold">morethanmin</span>
                </div>
              </transition>
            </v-col>
            <v-col align-self="end" class="mt-1 pr-5 pl-3" cols="9">
              <div class="mt-2 d-flex flex-row text-subtitle-2">
                <div class="mr-6">
                  <button class="d-flex flex-row">
                    <v-icon>mdi-book-open-outline</v-icon>
                    <div class="ml-1">
                      <NuxtLink to="/">Overview</NuxtLink>
                    </div>
                  </button>
                </div>
                <div class="mr-6">
                  <button class="d-flex flex-row">
                    <v-icon>mdi-book-outline</v-icon>
                    <div class="ml-1">
                      <NuxtLink to="/repositories">Repositories</NuxtLink>
                    </div>
                  </button>
                </div>
                <div class="mr-6">
                  <button class="d-flex flex-row">
                    <v-icon>mdi-chart-box-outline</v-icon>
                    <div class="">
                      <NuxtLink to="/projects">Projects</NuxtLink>
                    </div>
                  </button>
                </div>
                <div class="mr-6">
                  <button class="d-flex flex-row">
                    <v-icon>mdi-cube-outline</v-icon>
                    <div class="ml-1">
                      <NuxtLink to="/packages">Packages</NuxtLink>
                    </div>
                  </button>
                </div>
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
      <v-divider></v-divider>

      <div class="footer-box d-flex align-center common-wrapper">
        <div
          class="align-center footer-info ma-5 d-flex flex-row justify-space-between"
        >
          <span>&copy; {{ new Date().getFullYear() }} morethanmin, Inc.</span>
          <div><a href="/">Terms</a></div>
          <div><a href="/">Security</a></div>
          <div><a href="/">Status</a></div>
          <div><a href="/">Docs</a></div>
          <div>
            <a href="/"><v-icon>mdi-cat</v-icon></a>
          </div>
          <div><a href="/">Contact Github</a></div>
          <div><a href="/">Pricing</a></div>
          <div><a href="/">API</a></div>
          <div><a href="/">Training</a></div>
          <div><a href="/">Blog</a></div>
          <div><a href="/">About</a></div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>
<style lang="scss" scoped>
.header {
  display: block !important;
  background-color: #252a2e !important;
  color: white !important;
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

.header-template {
  z-index: 5 !important;
}

.header-search {
  color: black;
  border: 1px solid #444d56;
  height: 1rem;
  width: 200px;

  transition: width 0.25s;
}
.header-search:focus {
  width: 350px;
  background-color: white;
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

.footer-box {
  height: 150px;
}
.footer-info {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
