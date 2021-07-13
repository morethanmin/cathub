<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="Cathub"
          subtitle="Github'st Development Blog service using vue and nuxt"
          :desc="[`vue`, `nuxt`]"
          link="https://github.com/morethanmin/cat-hub"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="Keeeep"
          subtitle="google keep clone application using react and redux saga"
          :desc="[`react`, `redux`, `redux-saga`]"
          link="https://github.com/morethanmin/memo"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="Remotto"
          subtitle="sns toy project using ejs and express"
          :desc="[`node js`, `ejs`, `express`]"
          link="https://github.com/morethanmin/remotto"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="mtmtravel"
          subtitle="Travel Shopping-mall toy project using react and express"
          :desc="[`node js`, `react`, `express`]"
          link="https://github.com/morethanmin/mtmtravel"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="mtmcamp"
          subtitle="reviewing camping toy Project using ejs and express"
          :desc="[`node js`, `ejs`, `express`]"
          link="https://github.com/morethanmin/mtmcamp"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="until-offline"
          subtitle="개인 프로젝트 (진행중)"
          :desc="[`react`, `next`]"
          link="https://github.com/morethanmin/until-offline"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@media (max-width: $vt_xs) {
  .card-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
