<template>
  <v-dialog v-model="dialog" persistent width="500">
    <v-card>
      <v-card-title class="title header">
        <img class="mr-1" width="20px" height="20px" :src="icon" />
        {{ title }}
      </v-card-title>
      <v-card-text class=" ">
        <div class="mb-2 title subHeader">
          Description
        </div>
        <div class="mb-4 subTitle">
          {{ subtitle }}
        </div>
        <div class="mb-2 title subHeader">
          Percentage
        </div>
        <div class="percent mb-4">
          <div
            class="bar"
            :style="`width: ${percent}%; background: ${color};`"
          ></div>
        </div>
        <div class="mb-2 title subHeader">
          Tags
        </div>
        <div class="chip-group">
          <TagChip
            v-for="(tag, index) in tags"
            :key="index"
            :text="tag"
            class="mr-2"
          />
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <Button class="close-btn" text="close" @click="$emit(`close`)" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    dialog: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "FFFFFF"
    },
    percent: {
      type: Number,
      default: 10
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #f6f8fa;
  border-bottom: 1px solid #e1e4e8;
  margin-bottom: 20px;
}
.subHeader {
  color: black;
}
.title {
  font-size: 1rem !important;
}
.close-btn {
  padding: 0.1rem 1rem;
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
.subTitle {
  color: black;
  background: #fafbfc;
  border: 1px solid #e1e4e8;
  border-radius: 10px;
  padding: 15px;
}
.chip-group {
  display: flex;
  overflow: scroll;
  flex-wrap: nowrap;
}
.chip-group::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
</style>
