<template>
  <div>
    <div class="mb-5">
      <div class="d-flex justify-space-between mb-3">
        <div class="about">About</div>
      </div>
      <v-card outlined flat class="pa-5">
        <nuxt-content
          :class="`${$vuetify.theme.dark ? `theme--dark` : `theme--light`}`"
          :document="about"
        />
      </v-card>
    </div>
    <div class="mb-5">
      <div class="d-flex justify-space-between mb-3">
        <div class="projects">Projects</div>
        <NuxtLink to="/projects">
          <div class="text-body-2 ft-4">more</div>
        </NuxtLink>
      </div>
      <PinnedList :items="projects" />
    </div>
    <div class="mb-5">
      <div class="d-flex justify-space-between mb-3">
        <div class="skills">Skills</div>
      </div>
      <Skills :items="skills" :detailItems="skillsDetail" />
    </div>
    <div class="mb-5">
      <Activitys :activitys="activitys" />
    </div>

    <div class="mb-5">
      <div class="d-flex justify-space-between mb-3">
        <div class="recommendations">Recommendations</div>
      </div>
      <v-divider></v-divider>
      <Comments :comments="comments" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
<script>
export default {
  props: {
    about: {
      type: Object,
      default: () => ({}),
    },
    projects: {
      type: Array,
      default: () => [],
    },
    skills: {
      type: Array,
      default: () => [],
    },
    skillsDetail: {
      type: Array,
      default: () => [],
    },
    activitys: {
      type: Object,
      default: () => {},
    },
    comments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
