<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <br>
            <b-form-input v-model="user.name" type="text" placeholder="Enter your name" :state="user.name.length?'success':'warning'" :formatter="format"></b-form-input>
            <b-form-input v-model="user.email" type="text" placeholder="Enter your email" :state="user.email.length?'success':'warning'" :formatter="format"></b-form-input>
            <small class="text-muted">This will save your name and email to a server</small>

            <p>Your input: <br>{{user.name}}<br>{{user.email}}</p>
            <b-button href="" @click="submit">send</b-button>
        </div>
      </div>
      
    </div>
      
    </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          name: '',
          email: ''
        }
      }
    },
    methods: {
      format(value) {
            return value.toLowerCase();
          },
      submit(){
        // console.log(this.user);
        this.$http.post('https://ng-http-25f0f.firebaseio.com/oddhill-test.json', this.user)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        })
      }


    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/main.scss';
</style>