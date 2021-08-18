<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="Cathub"
          subtitle="Github'st Development Blog service using vue and nuxt"
          :langueges="[
            {
              name: `vue`,
              color: `#4FC08D`
            },
            {
              name: `nuxt`,
              color: `#4FC08D`
            }
          ]"
          link="https://github.com/morethanmin/cat-hub"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="Keeeep"
          subtitle="google keep clone application using react and redux saga"
          :langueges="[
            {
              name: `react`,
              color: `#61DAFB`
            },
            {
              name: `redux`,
              color: `#61DAFB`
            },
            {
              name: `redux-saga`,
              color: `#61DAFB`
            }
          ]"
          link="https://github.com/morethanmin/memo"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="Remotto"
          subtitle="sns toy project using ejs and express"
          :langueges="[
            {
              name: `express`
            },
            {
              name: `ejs`,
              color: '#f1e05a'
            }
          ]"
          link="https://github.com/morethanmin/remotto"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="mtmtravel"
          subtitle="Travel Shopping-mall toy project using react and express"
          :langueges="[
            {
              name: `react`,
              color: `#61DAFB`
            },
            {
              name: `express`
            }
          ]"
          link="https://github.com/morethanmin/mtmtravel"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="mtmcamp"
          subtitle="reviewing camping toy Project using ejs and express"
          :langueges="[
            {
              name: `express`
            },
            {
              name: `ejs`,
              color: '#f1e05a'
            }
          ]"
          link="https://github.com/morethanmin/mtmcamp"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <Project
          title="until"
          subtitle="블로그를 만드려다 블로그 플랫폼을 만들게 되었습니다... (개발중)"
          :langueges="[
            {
              name: `react`,
              color: `#61DAFB`
            },
            {
              name: `redux`,
              color: `#61DAFB`
            },
            {
              name: `redux-saga`,
              color: `#61DAFB`
            }
          ]"
          link="https://github.com/untilled/until"
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
