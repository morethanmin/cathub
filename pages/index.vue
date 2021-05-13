<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" cols="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" cols="9">
        <div class="readme mb-5">
          <v-card outlined flat class="pa-3">
            <v-card-title class="text-subtitle-2">
              Hi there 👋
            </v-card-title>
            <v-card-text class="text-body-2">
              vue nuxt를 겅부하고있습니다. 해당 사이트는 github사이트가 아닌
              공부용으로 제작된 사이트입니다..
            </v-card-text>
            <v-card-text class="pt-0">
              this is toy project.
            </v-card-text>
          </v-card>
        </div>
        <div class="pinned mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="">Pinned</div>
            <div class="text-body-2">Customize your pins</div>
          </div>
          <v-container class="ma-0 pa-0">
            <v-row>
              <v-col v-for="n in 6" :key="n" cols="6">
                <v-card outlined flat>
                  <v-card-title class="text-subtitle-2">
                    <v-icon>mdi-tent</v-icon>
                    mtmcamp
                  </v-card-title>
                  <v-card-text class="text-body-2">
                    개인 프로젝트
                  </v-card-text>
                  <v-card-text class="pt-0">
                    JavaScript
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="pinned">
          <div class="d-flex justify-space-between mb-3">
            <div class="">409 contributions in the last year</div>
            <div class="text-body-2">
              Contribution settings
              <v-icon>mdi-menu-down</v-icon>
            </div>
          </div>
          <div class="ma-0 pa-0">
            <v-card outlined flat>
              <v-card-title class="text-subtitle-2"> </v-card-title>
              <v-card-text class="text-body-2"> </v-card-text>
              <v-card-text class="pt-0"> </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped></style>
<script>
import { mapGetters, mapMutations } from "vuex";

import Profile from "~/components/Profile.vue";

export default {
  components: {
    Profile
  },
  data: () => ({
    tab: null
  }),
  computed: {
    ...mapGetters({
      isOvered: "getIsOvered"
    })
  },
  methods: {
    ...mapMutations({
      setIsOvered: "setIsOvered"
    }),
    handleScrollEvent() {
      const dom = this.$refs.profileImage;
      const targetScroll = dom.offsetTop + dom.height;

      if (targetScroll < window.scrollY) this.setIsOvered(true);
      else this.setIsOvered(false);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.handleScrollEvent);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScrollEvent);
  }
};
</script>
