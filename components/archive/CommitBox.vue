<template>
  <svg class="svg">
    <!-- 832 -->
    <g transform="translate(-417,0)">
      <g
        v-for="week of Math.ceil(mergedData.length / 7)"
        :key="week"
        :transform="`translate(${16 * (week - 1)}, 0)`"
      >
        <rect
          v-for="day of mergedData.length - week * 7 < 0
            ? mergedData.length % 7
            : 7"
          :key="day"
          width="10"
          height="10"
          :x="17 - week"
          :y="15 * (day - 1)"
          rx="2"
          ry="2"
          :date-date="mergedData[(week - 1) * 7 + (day - 1)].date"
          :date-data="mergedData[(week - 1) * 7 + (day - 1)].count"
          :class="`counted-${mergedData[(week - 1) * 7 + (day - 1)].count}`"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    parsedDate: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    mergedData: [],
    monthData: []
  }),
  methods: {
    parseDate(date) {
      //return 0000-00-00
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
        -2
      )}-${`0${date.getDate()}`.slice(-2)}`;
    },
    getStart(date) {
      //return 0000-00-00 (current year - 1)
      return `${date.getFullYear() - 1}-${`0${date.getMonth() + 1}`.slice(
        -2
      )}-${`0${date.getDate()}`.slice(-2)}`;
    },
    getMonthLetter(month) {
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
        12: "Dec"
      };
      return letter[month];
    },
    //1년전 date ~ 현재까지를 array로 생성하고 counted에 있는 데이터만큼 추가한다.
    getDateData(parsedDate) {
      const dateEnd = new Date();
      const dateStart = new Date(`${this.getStart(dateEnd)}`);

      //datesBetween 생성
      const datesBetween = [];
      for (
        let date = new Date(dateStart);
        date <= dateEnd;
        date.setDate(date.getDate() + 1)
      ) {
        datesBetween.push(this.parseDate(date));
      }

      //datesBetween과 countedDate를 합친다.
      const result = datesBetween.map(date => {
        // const value = Object.keys(countedDate).find(key => `${key}` === date);
        const count = parsedDate.filter(item => item === date).length;

        if (count)
          console.log({
            date: date,
            count: count
          });
        return {
          date: date,
          count: count
        };
      });
      return result;
    },
    getMonthData() {
      const date = new Date();
      const month = date.getMonth();
      const dateData = this.mergedData.map(x => x.date);
      const monthData = [];

      let lastFound = 0;
      for (let i = 0; i <= 12; i++) {
        const curMonth = ((month + i) % 12) + 1;
        const curMonthString = `0${curMonth}`.slice(-2);
        const x = Math.ceil(
          (dateData
            .slice(lastFound)
            .findIndex(x => x.includes(`-${curMonthString}-`)) +
            lastFound) /
            7
        );
        lastFound = x;
        monthData.push({
          month: this.getMonthLetter(curMonth),
          x: x
        });
      }
      return monthData;
    }
  },
  mounted() {
    this.mergedData = this.getDateData(this.parsedDate);
    // this.monthData = this.getMonthData();
  }
};
</script>

<style lang="scss">
.svg {
  width: 100%;
  height: 100%;
}
rect {
  fill: #ebedf0;
}
.label {
  font-size: 0.6rem;
}

.counted-1 {
  fill: #9be9a8;
}
.counted-2 {
  fill: #72db83;
}
.counted-3 {
  fill: #40c463;
}
.counted-4 {
  fill: #30a14e;
}
.counted-5 {
  fill: #216e39;
}
</style>
