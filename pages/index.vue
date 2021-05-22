<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" cols="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" cols="9">
        <div class="readme mb-5">
          <v-card outlined flat class="pa-3">
            <v-card-title class="text-subtitle-2"> Hi there 👋 </v-card-title>
            <v-card-text class="text-body-2">
              vue nuxt를 겅부하고있습니다. 해당 사이트는 github사이트가 아닌
              공부용으로 제작된 사이트입니다..
            </v-card-text>
            <v-card-text class="pt-0"> this is toy project. </v-card-text>
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
                <info-card
                  icon="mdi-tent"
                  title="mtmcamp"
                  subtitle="개인 프로젝트"
                  desc="Javascript"
                />
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
        <v-container class="main common-wrapper mt-5 pa-0">
          <v-row>
            <v-col class="contribution-main" cols="10">
              <div class="activity">
                <div class="mb-3">Contribution activity</div>
                <div
                  class="contribution-main-line text-body-2 pa-3 d-flex align-center"
                >
                  <div class=" ">May 2021</div>
                  <v-divider></v-divider>
                </div>
              </div>
            </v-col>
            <v-col class="contribution-side d-flex flex-column mt-2" cols="2">
              <button class="rounded-lg slected pa-1 pl-4 mb-4 text-left">
                2021
              </button>
              <button class="rounded-lg pa-1 pl-4 mb-4 text-left">2022</button>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.contribution-side {
  .slected {
    background-color: #0366d6;
    color: white;
  }
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";

import Profile from "~/components/Profile.vue";

export default {
  components: {
    Profile,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
