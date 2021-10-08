<template>
  <div>
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
        <NuxtLink to="/projects">
          <div class="text-body-2 ft-4">more</div>
        </NuxtLink>
      </div>
      <PinnedList :items="projects" />
    </div>
    <div class="mb-5">
      <div class="d-flex justify-space-between mb-3">
        <div class="skills color-black">Skills</div>
      </div>
      <Skills :items="skills" :detailItems="skillsDetail" />
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
  </div>
</template>

<style lang="scss" scoped></style>
<script>
export default {
  props: {
    about: {
      type: Object,
      default: () => ({})
    },
    projects: {
      type: Array,
      default: () => []
    },
    skills: {
      type: Array,
      default: () => []
    },
    skillsDetail: {
      type: Array,
      default: () => []
    }
  }
};
</script>
