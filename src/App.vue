<template>
  <div id="app">
    
      <router-view/>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-attachment: fixed;
}

#nav {
  padding: 20px;
  color: white;
  font-size:large;
  font-family: 'Exo', sans-serif;
  padding-bottom:20px;
  top:0px;
  position: relative;
  background-color: rgba(153, 152, 152, 0.1);
  
}

#nav a {
  font-size:large;
  font-weight:600px;
  color: #ffffff;
  text-align: right;
}

#nav a.router-link-exact-active {
  border-bottom: 2px solid #ffffff;
}

#nav img {
  height: 30px;
  width: 30px;
  float:left;
}

#nav div {
  text-align:center;
}



</style>
