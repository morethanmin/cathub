<template>
  <div>
    <v-card outlined flat>
      <v-card-title class="text-subtitle-2 pb-2">
        <img width="20px" height="20px" :src="icon" />
        <div class="header">{{ title }}</div>
      </v-card-title>
      <!-- <v-card-text class="pb-0 text-body-2 color_secondary">
      <div class="percent">
        <div
          class="bar"
          :style="`width: ${percent}%; background: ${color};`"
        ></div>
      </div>
    </v-card-text> -->
      <v-card-text class="subtitle pb-0 color_secondary">
        {{ subtitle }}
      </v-card-text>
      <v-card-text class="text-body-2 color_secondary">
        <Button
          class="btn-more text-body-3 pa-1 pl-2 pr-2"
          text="More"
          @click="$emit(`click`)"
        />
      </v-card-text>
      <!-- <v-card-text class="pt-0 color_secondary d-flex">
      <languege-chip v-for="(name, index) in desc" :key="index" :name="name" />
    </v-card-text> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "FFFFFF"
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    percent: {
      type: Number,
      required: false,
      default: 0
    },
    subtitle: {
      type: String,
      required: false,
      default: ""
    },
    link: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
}
.header {
  font-weight: 700;
  font-size: 1.1rem;
  margin-left: 6px;
}
.subtitle {
  font-size: 0.8rem;
}
.percent {
  width: 100%;
  height: 7px;
  border-radius: 12px;
  background: #e2e3e4;
}
.bar {
  height: 7px;
  border-radius: 12px;
  background: black;
}
.btn-more {
  font-size: 0.8rem;
}
</style>
