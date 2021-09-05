<template>
  <nav class="header-nav  color-black pa-0">
    <v-row class=" ma-0 pa-0 common-wrapper">
      <v-col class="show-info-box pa-0 pl-5 pr-3" cols="3">
        <transition name="fade">
          <div v-if="$store.getters.getIsOvered" class="show-data">
            <img
              src="~/static/images/face.jpeg"
              alt="face"
              width="30"
              height="30"
              style="border-radius: 50%"
            />
            <span class="ml-2 font-weight-bold">morethanmin</span>
          </div>
        </transition>
      </v-col>
      <v-col align-self="end" class="header-tab pt-0 pb-0 pr-5 pl-0" cols="9">
        <div class="d-flex flex-row text-subtitle-2 ft-4">
          <div class="">
            <NuxtLink to="/">
              <button
                ref="About"
                @click="selectedTab = 'About'"
                :class="[
                  ...(selectedTab === 'About'
                    ? ['selectedTab', 'font-weight-bold']
                    : [])
                ]"
                class="d-flex flex-row align-center"
              >
                <v-icon>mdi-account-circle-outline</v-icon>
                <div class="ml-1">About</div>
              </button>
            </NuxtLink>
          </div>
          <div class="">
            <NuxtLink to="/projects">
              <button
                ref="projects"
                @click="selectedTab = 'projects'"
                :class="[
                  ...(selectedTab === 'projects'
                    ? ['selectedTab', 'font-weight-bold']
                    : [])
                ]"
                class="d-flex flex-row align-center"
              >
                <v-icon>mdi-book-outline</v-icon>
                <div class="">Projects</div>
              </button>
            </NuxtLink>
          </div>
          <div class="">
            <NuxtLink to="/archive">
              <button
                ref="packages"
                @click="selectedTab = 'archive'"
                :class="[
                  ...(selectedTab === 'archive'
                    ? ['selectedTab', 'font-weight-bold']
                    : [])
                ]"
                class="d-flex flex-row align-center"
              >
                <v-icon>mdi-post-outline</v-icon>
                <div class="ml-1">Archive</div>
              </button>
            </NuxtLink>
          </div>
        </div>
      </v-col>
    </v-row>
  </nav>
</template>

<style lang="scss" scoped>
.header-nav {
  z-index: 10;
  margin-top: 30px;
}
.header-nav {
  position: sticky !important;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #eaecef;
  display: flex;
  justify-content: center;
  background: white;
}
.header-row {
  height: 100%;
}

.layout-nav {
  position: fixed;
  width: 100%;
  color: #252a2e;
  background-color: white !important;
  border-bottom: 1px solid black;
  //height: 100%;
}

.header-tab {
  button {
    height: 45px;
    font-size: 0.9rem;
    transition: border 0.2s;
    padding: 15px;
    border-bottom: 2px solid white;
  }
  button:hover {
    border-bottom: 2px solid #d1d5da;
  }
  .v-icon {
    font-size: 1.25rem;
  }
  .selectedTab {
    .v-icon {
      color: black;
    }
    border-bottom: 2px solid red !important;
  }
}

.show-data {
  display: flex;
  height: 100%;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media (max-width: $vt_sm) {
  .show-info-box {
    display: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      selectedTab: ""
    };
  },
  watch: {
    "$route.fullPath"(log) {
      this.initialSelectedTab();
    }
  },
  methods: {
    initialSelectedTab() {
      const match = this.$route.matched;
      if (Array.isArray(match) === false) return;
      if (match.some(x => x.path === "")) this.selectedTab = "About";
      if (match.some(x => x.path === "/projects"))
        this.selectedTab = "projects";
      if (match.some(x => x.path === "/archive")) this.selectedTab = "archive";
    }
  },
  mounted() {
    this.initialSelectedTab();
  }
};
</script>
