<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" cols="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" cols="9">
        archive
        github의 wiki 처럼 개발할 예정입니다.
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
  computed: {},
  methods: {}
};
</script>
