<template>
  <div>
    <svg width="828" height="128">
      <g transform="translate(10,20)">
        <g v-for="(week) of parseInt(mergedData.length/7+1)" :key="week" :transform="`translate(${16*(week-1)}, 0)`">
          <rect 
            v-for="day of mergedData.length - week*7 < 0?mergedData.length%7:7" 
            :key="day" width="11" height="11" 
            :x="17-week" :y="15*(day-1)" rx="2" ry="2" 
            :date-date="mergedData[(week-1)*7+(day-1)].date" 
            :date-data="mergedData[(week-1)*7+(day-1)].count"
            :class="`counted-${mergedData[(week-1)*7+(day-1)].count}`"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    countedDate: {
      tyoe: Object,
      default: () => ({})
    }
  },
  data: () => ({
    datesBetween:[]
  }),
  computed: {
    mergedData() {
      return this.getDateData()
    }
  },
  methods:{
    parseDate(date){
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`
    },
    getStart(date){
      return `${date.getFullYear()-1}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`
    },
    getDateData(){
      const dateEnd = new Date()
      const dateStart = new Date(`${this.getStart(dateEnd)}`)
      const datesBetween = []
      for(let date = new Date(dateStart); date <= dateEnd; date.setDate(date.getDate() + 1)){
        datesBetween.push(this.parseDate(date))
      }
      
      const result = datesBetween.map(date=>{
        const value = Object.keys(this.countedDate).find(key=>`${key}`===date)
        return {
          date: date,
          count: value?this.countedDate[value]:0
        }
      })
      return result
    },
  },
  mounted(){
  }
}
</script>

<style lang="scss">
rect{
  fill: #ebedf0;
}

.counted-1{
  fill: #9be9a8;
}
.counted-2{
  fill: #9be9a8;
}
.counted-3{
  fill: #40c463;
}
.counted-4{
  fill: #30a14e;
}
.counted-5{
  fill: #216e39;
}

</style>