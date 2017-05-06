<template>
<div>
<div class="container-fluid">
  <div class="row">
    <div class="col-2 col-lg-3 col-xl-4">
      <div class="middle-nav">
        <img class="icons" src="../assets/images/icons/arrow-left.png" alt="star">
      </div>
    </div>
    <div class="col-8 col-lg-6 col-xl-4">
        <div class="proj-jumbotron" v-for="project in projects" >
            <div class="container">
              <br>
                <h3>{{project.name}}</h3>
                <h4>{{lead}}</h4>
                    <doughnut-chart :chart-data="datacollection" :options="opts" 
                      :labels="{}">{{fillData()}}
                    </doughnut-chart>
                <hr>
                <div class="hourSummary">
                  <h5>Hours Spent: {{project.client}}</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="col-2 col-lg-3 col-xl-4">
      <div class="middle-nav">
        <img class="icons" src="../assets/images/icons/arrow-right.png" alt="star">
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
  import DoughnutChart from './charts/DoughnutChart.js';
  export default{
    props: ['projects'],
    data () {
      return {
        projectName: 'Project1',
        lead: 'Created in Vue.js 2',
        client: 'Client Hours',
        internal: 'Internal Hours',
        other: 'Other',
        totalHours: 1023,
        title: "ksdhkhds",
        datacollection: null,
        opts: null,
        clientHour: 300,
        internalHour: 400,
        other: 87
      }
    },
    created() {
        this.fillData()
    },
    components: {
        DoughnutChart
    },
    methods: {
        fillData() {
            this.opts = {
                cutoutPercentage: 40, // The Fatness of the Pie
                animation: {
                    animateScale: true,
                    animateRotate: false
                }, 
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
            },
            this.datacollection = {
                labels: ['Client Hours', 'Internal Hours', 'Other'],
                datasets: [{
                    data: [this.clientHour, this.internalHour, this.other],
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
    // getRandomInt() {
    //     return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    // },
    // getHourData(key) {
    //     console.log(key);
    //     // this.other = project
    //     this.title = "apa"
    //         // console.log(this.data);

    // }
    }

    
  }
</script>