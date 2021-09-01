<template>
  <div>
    <svg width="400" height="100">
      <g transform="translate(0,0)">
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
    mergedData: [],
    monthData: []
  }),
  methods: {
    parseDate(date) {
      return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
        -2
      )}-${`0${date.getDate()}`.slice(-2)}`;
    },
    getStart(date) {
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
    getDateData() {
      const dateEnd = new Date();
      const dateStart = new Date(`${this.getStart(dateEnd)}`);
      const datesBetween = [];
      for (
        let date = new Date(dateStart);
        date <= dateEnd;
        date.setDate(date.getDate() + 1)
      ) {
        datesBetween.push(this.parseDate(date));
      }

      const result = datesBetween.map(date => {
        const value = Object.keys(this.countedDate).find(
          key => `${key}` === date
        );
        return {
          date: date,
          count: value ? this.countedDate[value] : 0
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
    this.mergedData = this.getDateData();
    this.monthData = this.getMonthData();
  }
};
</script>

<style lang="scss">
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
  fill: #9be9a8;
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
