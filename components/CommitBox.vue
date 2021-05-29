<template>
  <div>
    <svg width="828" height="128">
      <g transform="translate(10,20)">
        <g v-for="(week) of Math.ceil(mergedData.length/7)" :key="week" :transform="`translate(${16*(week-1)}, 0)`">
          <rect 
            v-for="day of mergedData.length - week*7 < 0?mergedData.length%7:7" 
            :key="day" width="11" height="11" 
            :x="17-week" :y="15*(day-1)" rx="2" ry="2" 
            :date-date="mergedData[(week-1)*7+(day-1)].date" 
            :date-data="mergedData[(week-1)*7+(day-1)].count"
            :class="`counted-${mergedData[(week-1)*7+(day-1)].count}`"
          />
        </g>
        <text text-anchor="start" class="label" dx="-10" dy="8" style="display: none;">Sun</text>
        <text text-anchor="start" class="label" dx="-10" dy="25">Mon</text>
        <text text-anchor="start" class="label" dx="-10" dy="32" style="display: none;">Tue</text>
        <text text-anchor="start" class="label" dx="-10" dy="56">Wed</text>
        <text text-anchor="start" class="label" dx="-10" dy="57" style="display: none;">Thu</text>
        <text text-anchor="start" class="label" dx="-10" dy="85">Fri</text>
        <text text-anchor="start" class="label" dx="-10" dy="81" style="display: none;">Sat</text>

        <text v-for="month of monthData" :key="month.count" text-anchor="start" class="label" :dx="15 + 16*month.x" dy="-5">{{month.month}}</text>

      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    countedDate: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    mergedData:[],
    monthData:[],
  }),
  methods:{
    parseDate(date){
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`
    },
    getStart(date){
      return `${date.getFullYear()-1}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`
    },
    getMonthLetter(month){
      const letter = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sept",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      }
      return letter[month]
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
    getMonthData(){
      const date = new Date()
      const month = date.getMonth()
      const dateData = this.mergedData.map(x=>x.date)
      const monthData = []


      let lastFound = 0
      for (let i = 0; i <= 12; i++) {
        const curMonth = ((month+i) % 12) + 1
        const curMonthString = `0${curMonth}`.slice(-2)
        const x = (Math.ceil((dateData.slice(lastFound).findIndex(x=>x.includes(`-${curMonthString}-`)) + lastFound)/7))
        lastFound = x
        monthData.push({
          month: this.getMonthLetter(curMonth),
          x : x
        })
      }
      return monthData
    }
  },
  mounted(){
    this.mergedData = this.getDateData()
    this.monthData = this.getMonthData()
  }
}
</script>

<style lang="scss">
rect{
  fill: #ebedf0;
}
.label{
  font-size: .6rem;
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