<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <v-col class="card-col" sm="12" md="6">
        <info-card
          icon="mdi-cat"
          title="cathub"
          subtitle="Nuxt기반의 내 블로그"
          :desc="[`vue`, `nuxt`]"
          link="https://github.com/morethanmin/cat-hub"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <info-card
          title="dev-in"
          subtitle="팀 프로젝트 (J2KB 유니콘 대회)"
          :desc="[`react`]"
          link="https://github.com/morethanmin/dev-in"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <info-card
          icon="mdi-alien-outline"
          title="remotto"
          subtitle="개인 프로젝트"
          :desc="[`node js`, `ejs`, `express`]"
          link="https://github.com/morethanmin/remotto"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <info-card
          icon="mdi-tent"
          title="mtmtravel"
          subtitle="공부용 프로젝트"
          :desc="[`node js`, `react`, `express`]"
          link="https://github.com/morethanmin/mtmtravel"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <info-card
          icon="mdi-tent"
          title="mtmcamp"
          subtitle="개인 프로젝트"
          :desc="[`node js`, `ejs`, `express`]"
          link="https://github.com/morethanmin/mtmcamp"
        />
      </v-col>
      <v-col class="card-col" sm="12" md="6">
        <info-card
          title="until-offline"
          subtitle="개인 프로젝트 (진행중)"
          :desc="[`react`, `next`]"
          link="https://github.com/morethanmin/until-offline"
        />
      </v-col>
    </v-row>
  </v-container>
</template>