<template>
  <div>
    <v-row class="" justify="center" align="center">
      <v-col class="dev-outlined pa-0" cols="3">
        내 정보
      </v-col>
      <v-col class="dev-outlined pa-0" cols="9"> </v-col>
    </v-row>
  </div>
</template>

<style lang="sass" scoped></style>
<script>
import Overview from "~/components/Overview.vue";
import Subjects from "~/components/Subjects.vue";

export default {
  components: {
    Overview,
    Subjects
  },
  data: () => ({
    tab: null
  })
};
</script>
