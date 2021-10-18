<template>
  <div class="comment-box">
    <div class="profile-img">
      <img
        :src="img"
        width="40"
        height="40"
        style="border-radius: 50%"
        alt=""
      />
    </div>
    <div class="comment-card">
      <div class="arrow"></div>
      <div class="line"></div>
      <div class="comment">
        <div class="comment-title">
          <div class="font-weight-bold text-subtitle-2">
            {{ title }}
          </div>
          <div class="font-weight-light text-subtitle-2">
            {{ subTitle }}
          </div>
        </div>
        <div class="comment-desc text-body-2">
          {{ comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    comment: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-img {
  margin-right: 10px;
}
.comment-box {
  display: flex;
  margin: 20px 0;
}
.comment-card {
  position: relative;
  display: flex;
  width: 100%;
}
.comment {
  width: 100%;
  z-index: 1;
  border: 1px solid #cde0f7;
  border-radius: 7px;
}
.comment-title {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom: 1px solid #cde0f7;
  padding: 5px 10px;
  background: #f1f8ff;
  display: flex;
  > div {
    margin-right: 5px;
  }
}
.comment-desc {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 15px 10px;
  background: white;
  color: #24292e;
}
.arrow {
  width: 10;
  height: 0;
  z-index: 2;
  transform: translate(1px, 10px);
  border-bottom: 5px solid transparent; /* 화살표 */
  border-right: 5px solid #f2f9ff;
  border-top: 5px solid transparent;
}
.line {
  position: absolute;
  height: calc(100% + 40px);
  transform: translate(20px, -20px);
  border-left: 1px solid #ebedef;
  z-index: 0;
}
</style>
