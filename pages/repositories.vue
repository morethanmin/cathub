<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="card-col col-info pa-5" sm="12" md="3">
        <Profile />
      </v-col>
      <v-col class="card-col align-self-start pa-5" sm="12" md="9">
        <!-- 사용한 기술 스택 적을 수 있게, 팀 프로젝트인지, 개인 프로젝트인지, 개인
        학습레파지토리인지 -->
        <nav class="nav-bar pa-2 mb-6 rounded-pill d-flex text-subtitle-2">
          <div class="font-weight-black">All</div>
          <v-divider class="mr-2 ml-2" color="white" vertical></v-divider>
          <div class="">HTML & Javascript</div>
          <v-divider class="mr-2 ml-2" color="white" vertical></v-divider>
          <div>React</div>
          <v-divider class="mr-2 ml-2" color="white" vertical></v-divider>
          <div>Vue</div>
          <v-divider class="mr-2 ml-2" color="white" vertical></v-divider>
          <div>Express</div>
        </nav>
        <div class="ma-0 pa-0">
          <v-divider class="mb-4"></v-divider>
          <div v-for="n in 10" :key="n" class="">
            <info-list-box
              title="title"
              desc="description"
              createdAt="Updated 1 hour ago"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.nav-bar {
  background: #fafbfc;
  border: 1px solid #e2e3e4;
}
@media (max-width: $vt_xs) {
  .card-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    tab: null
  }),
  computed: {},
  methods: {}
};
</script>
