<template>
  <div class="small">
      <doughnut-chart
        :chart-data="datacollection"
        :options="{
          cutoutPercentage: 30, 
          animation: {
              animateScale:true,
              animateRotate: false
          }
          }"
        :width="400"
        :height="200"
        >
    </doughnut-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import DoughnutChart from '../DoughnutChart.js';

export default {
    components: {
        DoughnutChart
    },
    data() {
        return {
            datacollection: null,
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                datasets: [{
                    data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    hoverBackgroundColor: ["#FFF", "#CCC", "#000"]
                }],
                options: {
                  cutoutPercentage: 90,
                  animation: {
                      animateScale:true
                  }
                }
            }
            
            },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    }
}
</script>

<style lang="scss" scoped>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>