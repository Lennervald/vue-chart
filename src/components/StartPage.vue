<template>
  <div class="views">
     <h1>{{title}}</h1>
     <div class="body-text-content">
       <p>{{bodytext}}</p>
       <button class="app-btn">{{buttonmsg}}<i> -></i></button>
     </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        title: "dashboard.",
        bodytext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod nunc sed mattis tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris sit amet vulputate odio. Praesent ut consequat tortor. Quisque quis sodales leo. Aliquam id nisi lectus. In ac dictum",
        buttonmsg: "Kom igång"
      }
    }
  }
</script>

<style scoped>
  .views {
    background-color: #F9418C;
  }
</style>