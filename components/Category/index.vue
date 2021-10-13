<template>
  <v-row class="row-box">
    <v-col cols="9" v-if="articles.length > 0">
      <div class="mainBox mt-5">
        <div class="mainBoxHeader">
          <div class="left">
            <img src="~/static/images/face.jpeg" alt="" srcset="" />
            <div class="name">
              morethanmin
            </div>
            <NuxtLink
              v-if="articles.length"
              class="alink"
              :to="`/archive/${category}/${articles[0].slug}`"
            >
              recently writed {{ articles[0].title }}
            </NuxtLink>
            <div v-else>
              nothing
            </div>
          </div>
          <div class="right">
            <div v-if="articles.length">
              {{ articles[0].createdAt }}
            </div>
            <div>{{ articles.length }}articles</div>
          </div>
        </div>
        <div v-for="article in articles" :key="article.slug">
          <NuxtLink :to="`/archive/${category}/${article.slug}`">
            <!-- <img :src="article.img" :alt="article.alt" /> -->
            <div class="mainBoxConetnt">
              <div class="left">
                <div class="mainTitle">
                  <v-icon>mdi-text-box-outline</v-icon>
                  <div>
                    {{ article.title }}
                  </div>
                </div>
                <!-- <div class="sub">{{ article.description }}</div> -->
              </div>
              <div class="right">{{ article.createdAt }}</div>
            </div>
          </NuxtLink>
          <v-divider></v-divider>
        </div>
      </div>
    </v-col>
    <v-col cols="9" v-else>
      작성된 게시글이 없습니당.
    </v-col>
    <v-col cols="3">
      <div class="mt-5">
        <div>About</div>
        <div>카테고리 소개</div>
      </div>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.mainBox {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  height: 100%;
}
.mainBoxHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #f6f8fa;
  padding: 10px;
  border-bottom: 1px solid #d0d7de;
  font-size: 0.9rem;
  .left {
    display: flex;
    align-items: center;
    gap: 5px;
    .name {
      font-weight: bold;
    }
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    .alink {
      font-weight: 400;
      color: black;
      &:hover {
        text-decoration: underline;
        color: #0969da;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
.mainBoxConetnt {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  .left {
    display: flex;
    .mainTitle {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .sub {
      color: #57606a;
    }
  }
  .right {
    color: #57606a;
  }
}
.row-box {
  height: 100%;
}
</style>
<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    category: {
      type: String,
      default: ""
    }
  },
  data: () => ({}),
  content: {},
  mounted() {},
  methods: {}
};
</script>
