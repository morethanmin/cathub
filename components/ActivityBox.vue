<template>
  <div class="box">
    <div class="activity-title">
      <v-icon class="title-icon">
        {{icon}}
      </v-icon>
      <div class="title-text">
      {{title}}
      </div>
    </div>
    <div class="activity-desc">
      <ul>
        <li v-for="(content,index) of contents" :key="index" class="text-subtitle-2">
          {{content}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    icon:{
      type:String,
      default:"mdi-pencil"
    },
    title:{
      type:String,
      default:" "
    },
    contents:{
      type: Array,
      default: ()=>[],
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  border-left: 1px solid #eaedef;
  position: relative;
  margin: 0px 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  .activity-title{
  display: flex;
  align-content: center;
  .title-text{
  }
  .title-icon{
    position: absolute;
    background: #eaedef;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    transform: translate(-50%, 0px);
    font-size: medium;
  }
  
}
.activity-desc{
  ul{
    list-style: none;
    padding: 0px;
  }
  li{
    padding-bottom: 5px;
  }
}

.title-text, .activity-desc{
  margin-left: 40px;
}
}


</style>