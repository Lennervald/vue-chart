<template>
  <div>
      <doughnut-chart :chart-data="datacollection" :options="opts" 
      :labels="{}">{{fillData()}}
    </doughnut-chart>
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
            opts: null
        }
    },
    created() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.opts = {
                cutoutPercentage: 30, 
                animation: { animateScale:true, animateRotate: false},
                legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 14,
                                padding: 20,
                                fontSize: 16,
                                fontColor: "#000"
                            }
                        }
            }
            this.datacollection = {
                labels: ['Client Hours', 'Internal Hours', 'Other'],
                datasets: [{
                    data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                    backgroundColor: ["#DE5B49", "#F0CA4D", "#324D5C"],
                    hoverBackgroundColor: "#CCC",
                    borderWidth: 0,
                    borderColor: "#E7E7D0",
                    hoverBorderColor: "#E7E7D0",
                    defaultFontSize: 40,
                    boxWidth: 10

                }],
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