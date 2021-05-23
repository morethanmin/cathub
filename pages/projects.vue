<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col align-self="start" class="col-info pa-5" cols="3">
        <Profile />
      </v-col>
      <v-col class="align-self-start pa-5" cols="9">
        projects 레파지토리중에서 실제로 사용이 가능한 서비스들은 모아놓은 곳?
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

<style lang="scss" scoped></style>
<script>
import { mapGetters, mapMutations } from "vuex";

import Profile from "~/components/Profile.vue";

export default {
  components: {
    Profile,
  },
  data: () => ({
    tab: null,
  }),
  computed: {},
  methods: {},
};
</script>
