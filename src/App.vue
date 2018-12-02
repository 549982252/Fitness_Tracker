<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tracker">Tracker</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';

export default {
  name: "app",
components: {
  facebookLogin
},


}
</script>


<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '202831317315516',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
      
    
      FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
});
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function statusChangeCallback(response){
    if(response.status === 'connected'){
      console.log('Logged in and authenticated');
    } else {
      console.log('Not authenticated');
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
