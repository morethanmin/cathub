<template>
  <v-container class="main common-wrapper mt-5 pa-0">
    <div class="d-flex justify-space-between mb-3">
      <div class="carrer color-black">Develop Activity</div>
      <div>
        <toggle
          @Career="selected = `career`"
          @Education="selected = `education`"
          @Certificate="selected = `certificate`"
          @Awards="selected = `awards`"
          :menuItems="[
            {
              type: `event`,
              text: `Career`
            },
            {
              type: `event`,
              text: `Education`
            },
            {
              type: `event`,
              text: `Certificate`
            },
            {
              type: `event`,
              text: `Awards`
            }
          ]"
        >
          <div class="mobileSelect">
            {{ selected }}
            <v-icon>mdi-menu-down</v-icon>
          </div>
        </toggle>
      </div>
    </div>
    <v-row>
      <v-col
        v-if="selected === `career`"
        class="contribution-main"
        sm="12"
        md="10"
      >
        <div class="activity">
          <div class="contribution-main-line text-body-2 d-flex align-center">
            <div class="">May 2021</div>
            <v-divider></v-divider>
          </div>
          <Activity
            v-for="(item, idx) in activitys.careers"
            :key="idx"
            :img="require(`~/static/images/${item.img}`)"
            :title="item.title"
            :href="item.href"
            :type="item.type"
            :contents="item.contents"
          />
        </div>
      </v-col>
      <v-col
        v-else-if="selected === `education`"
        class="contribution-main"
        sm="12"
        md="10"
      >
        <div class="activity">
          <div class="contribution-main-line text-body-2 d-flex align-center">
            <div class="">May 2021</div>
            <v-divider></v-divider>
          </div>
          <!-- <Activity
            :img="require('~/static/images/gdg.jpg')"
            title="Google Developer Group "
          /> -->
          <Activity
            v-for="(item, idx) in activitys.educations"
            :key="idx"
            :img="item.img ? require(`~/static/images/${item.img}`) : ''"
            :icon="item.icon ? item.icon : ''"
            :title="item.title"
            :href="item.href"
            :contents="item.contents"
          />
        </div>
      </v-col>
      <v-col
        v-else-if="selected === `certificate`"
        class="contribution-main"
        sm="12"
        md="10"
      >
        <div class="activity">
          <div class="contribution-main-line text-body-2 d-flex align-center">
            <div class="">May 2021</div>
            <v-divider></v-divider>
          </div>
          <Activity
            v-for="(item, idx) in activitys.certificates"
            :key="idx"
            :img="item.img ? require(`~/static/images/${item.img}`) : ''"
            :icon="item.icon ? item.icon : ''"
            :title="item.title"
            :href="item.href"
            :contents="item.contents"
          />
        </div>
      </v-col>
      <v-col
        v-else-if="selected === `awards`"
        class="contribution-main"
        sm="12"
        md="10"
      >
        <div class="activity">
          <div class="contribution-main-line text-body-2 d-flex align-center">
            <div class="">May 2021</div>
            <v-divider></v-divider>
          </div>
          <Activity
            v-for="(item, idx) in activitys.awards"
            :key="idx"
            :title="item.title"
            :href="item.href"
            :contents="item.contents"
          />
        </div>
      </v-col>
      <v-col
        class="select contribution-side d-flex flex-column mt-2"
        sm="0"
        md="2"
      >
        <button
          @click="selected = `career`"
          :class="[
            'rounded-lg',
            'pa-1',
            'pl-4',
            'mb-4',
            'text-left',
            selected === 'career' ? 'selected' : ''
          ]"
        >
          Carrer
        </button>
        <button
          @click="selected = `education`"
          :class="[
            'rounded-lg',
            'pa-1',
            'pl-4',
            'mb-4',
            'text-left',
            selected === 'education' ? 'selected' : ''
          ]"
        >
          Education
        </button>
        <button
          @click="selected = `certificate`"
          :class="[
            'rounded-lg',
            'pa-1',
            'pl-4',
            'mb-4',
            'text-left',
            selected === 'certificate' ? 'selected' : ''
          ]"
        >
          Certificate
        </button>
        <button
          @click="selected = `awards`"
          :class="[
            'rounded-lg',
            'pa-1',
            'pl-4',
            'mb-4',
            'text-left',
            selected === 'awards' ? 'selected' : ''
          ]"
        >
          Awards
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    activitys: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    selected: "career"
  })
};
</script>

<style lang="scss" scoped>
.mobileSelect {
  visibility: hidden;
}
.contribution-side {
  .selected {
    background-color: #0366d6;
    color: white;
  }
}
.selected {
  background-color: #0366d6;
  color: white;
}
.v-icon {
  color: black !important;
}

@media (max-width: $vt_sm) {
  .select {
    display: none !important;
  }
  .mobileSelect {
    visibility: visible;
  }
}
</style>
