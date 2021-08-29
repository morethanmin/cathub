<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" sm="12" md="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" sm="12" md="9">
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="about  color-black">About</div>
          </div>
          <v-card outlined flat class="pa-5 color-black">
            <nuxt-content :document="about" />
          </v-card>
        </div>
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="projects color-black">Projects</div>
            <a
              target="_blank"
              href="https://github.com/morethanmin?tab=repositories"
            >
              <div class="text-body-2">more</div>
            </a>
          </div>
          <ProjectList />
        </div>
        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="skills color-black">Skills</div>
          </div>
          <Skills />
        </div>
        <div class="mb-5">
          <Activitys />
        </div>

        <div class="mb-5">
          <div class="d-flex justify-space-between mb-3">
            <div class="recommendations color-black">
              Recommendations
            </div>
          </div>
          <v-divider></v-divider>
          <Comments />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: $vt_xs) {
  .col-info {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
<script>
export default {
  props: {
    about: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
