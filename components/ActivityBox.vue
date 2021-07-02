<template>
  <div class="box">
    <div class="activity-title">
      <v-icon v-if="icon !== ``" class="title-icon">
        {{ icon }}
      </v-icon>
      <img v-if="img !== ``" :src="img" alt="" class="title-icon" />
      <div class="title-text">
        {{ title }}
      </div>
    </div>
    <div class="activity-desc" :class="[...(type === `company` ? [`company`]:[])]">
      <ul>
        <li
          v-for="(content, index) of contents"
          :key="index"
          class="text-subtitle-2"
        >
          {{ content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "mdi-pencil",
    },
    img: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: " ",
    },
    contents: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  border-left: 1px solid #eaedef;
  position: relative;
  margin: 0px 0px 0px 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  .activity-title {
    display: flex;
    align-content: center;
    .title-text {
    }
    .title-icon {
      position: absolute;
      background: #eaedef;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      transform: translate(-50%, 0px);
      font-size: medium;
    }
  }
  .activity-desc {
    ul {
      list-style: none;
      padding: 0px;
    }
    li {
      padding-bottom: 5px;
    }
  }

  .company{
    border: thin solid rgba(0, 0, 0, 0.12);
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
  }

  .title-text,
  .activity-desc {
    margin-left: 40px;
  }
}
</style>