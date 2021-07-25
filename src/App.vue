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
  position:relative;
  font-weight:600px;
  color: #ffffff;
  text-align: right;
  padding-bottom: 4px;
}

#nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: white;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
  transform: scale(0);
  transform-origin: center;
}

#nav a:hover::after,
#nav a:focus::after {
  opacity: 1;
 
  transform: scale(1);
}

#nav a.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: white;
  opacity: 1;
  transform: scale(1);
  
}

#nav img {
  height: 30px;
  width: 30px;
  float:left;
  transition: all 0.25s ease;
}

#nav img:hover {
  transform: scale(1.15);
}

#nav div {
  text-align:center;
}



</style>
