<template>
  <div>
    <div class="container">
      <div class="row">

      <div class="col-xs-12 col-md-2"></div>
        <div class="col-xs-12 col-md-4">
        <slot></slot>
        <br><br><br>
        <h3>Add a new Project</h3>
          <b-form-input v-model="project.id" type="text" placeholder="Enter id" :state="project.id.length?'success':'warning'" :formatter="format" @blur="counterUp"></b-form-input>
          <br>
          <b-form-input v-model="project.name" type="text" placeholder="Enter project name" :state="project.name.length?'success':'warning'" @blur="counterUp"></b-form-input>
          <br>
          <b-form-input v-model="project.internal_hours" type="text" placeholder="Enter internal hours" :state="project.internal_hours.length?'success':'warning'" :formatter="format" @blur="counterUp"></b-form-input>
          <br>
          <b-form-input v-model="project.client_hours" type="text" placeholder="Enter client hours" :state="project.client_hours.length?'success':'warning'" :formatter="format" @blur="counterUp"></b-form-input>
          <br>
          <b-form-input v-model="project.other_hours" type="text" placeholder="Enter other hours" :state="project.other_hours.length?'success':'warning'" :formatter="format" @blur="counterUp"></b-form-input>
          <br>
          <b-form-input v-model="project.total_hours" type="text" placeholder="Enter total hours" :state="project.total_hours.length?'success':'warning'" :formatter="format" @blur="counterLast"></b-form-input>
          <br>
          <small class="text-muted">This will save a new project to our firebase server</small>
          <br>
          <b-progress v-model="counter" :precision="1" show-progress animated></b-progress>
          <br>
          <b-button v-bind:class="buttonState" href="" @click="submit">{{fetchData()}}{{getTitle}}</b-button>
        </div>
        <div class="col-xs-12 col-md-4">
        <br><br><br>
            <h3>Our Added Projects</h3>
            <ul class="list-group">
              <li class="list-group-item" v-for="p in projects">
                  <h4>Name: {{p.name}}</h4>                  
                  <p><small>Project Id: {{p.id}}</small></p>
                  <p><small>Internal Hours: {{p.internal_hours}}</small></p>
                  <p><small>Client Hours: {{p.client_hours}}</small></p>
                  <p><small>Other Hours: {{p.other_hours}}</small></p>
                  <p>Total Hours: {{p.total_hours}}</p>
              </li>
            </ul>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        counter: 0,
        getTitle: 'Send Data!',
        buttonState: 'btn btn-success',
        user: {
          name: '',
          email: ''
        },
        project: {
          id: '',
          name: '',
          total_hours: '',
          internal_hours: '',
          client_hours: '',
          other_hours: ''
        },
        users: [],
        projects: []
      }
    },
    methods: {
      counterUp() {
            this.counter += 16,6;
          },
      counterLast() {
            this.counter = 100;
          },
      format(value) {
        return value /1;
            // return value.toLowerCase();
          },
      clickToSubmit(){
        submit();
      },
      submit(){
        this.getTitle = '... Data sent!',
        this.buttonState= 'btn btn-danger',
        this.$http.post('https://ng-http-25f0f.firebaseio.com/oddhill-projects.json', this.project)
        .then(response => {
          // console.log(response);
        }, error => {
          console.log(error);
        });
      },
      fetchData(){
        this.$http.get('https://ng-http-25f0f.firebaseio.com/oddhill-projects.json')
          .then(response => {
            return response.json()
          }).
          then(data => {
            const resultArray = [];
            for(let key in data){
              resultArray.push(data[key]);
            }
            this.projects = resultArray;
            
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/main.scss';
</style>