<template>
    <div class="back">
      <img class ="bg" src="../assets/kayak.png">
      <div id="nav">
        <router-link to='/'><img src="../assets/brand1.png"></router-link>
        <div>
          <router-link to="/about">About Me</router-link>   |
          <router-link to="/experiences"> Experiences</router-link>   |
          <router-link to="/projects">Projects</router-link>   
          <!-- <router-link to="/aspirations">Fun Facts!</router-link> -->
        </div>
      </div>
      <div class = "proj container">
        <h1 class = "title"> Working with projects both inside and outside the classroom really exposed me to the promise of CS: </h1>
        <div class = "proj-back">
          <div class="txt">
            <h2 class = "title"> MMM: Food Tracker </h2>
            <ul>
              <li> MMM is a website which allows you to keep track of your favorite restaurants that you have visited and your favorite dishes at the restaurant.</li>
              <li> You can click pictures of the dishes from your device or upload a picture from your photo library. </li>
              <li> Made use of Google Maps API, Places API and Geolocation API to search restaurant locations and find nearby restaurant recommendations. </li>
              <li> Written in VueJS and deployed using Firebase. Database deployed in Firestore and Google Auth used for security. </li>
            </ul>
             
          </div>
          <div class="img">
            <img class = "proj-img" src = "../assets/rankin.png"/>
            <a href = "https://zoomers-proj2.web.app/" target = "_blank"><div class = "proj-overlay proj-overlay-blur">
              <div class = "proj-link"> Visit Website &#128279; </div>
            </div></a>
          </div>
        </div>
        <div class = "proj-back">
          <div class="txt">
            <h2 class = "title"> To-Do's Manager </h2>
            <ul>
              <li> Modeled off of Todoist, it is a to-do list manager where you can keep track of your to-dos, both complete and incomplete </li>
              <li> You can assign and sort to-dos into different categories </li>
              <li> Website was written in VueJS and deployed using Firebase. Database was deployed using Firestore and Google Auth was used for security. </li>
              
            </ul>  
          </div>
          <div class="img">
            <img class = "proj-img" src = "../assets/todo.png"/>
            <a href = "https://csci5117-homework2-f3041.web.app/" target = "_blank"><div class = "proj-overlay proj-overlay-blur">
              <div class = "proj-link"> Visit Website &#128279; </div>
            </div></a>
          </div>
        </div>
        
        <div class = "proj-back">
          <div class="txt">
            <h2 class = "title"> Earthquake Data Analytics Project </h2>
            <ul>
              <li> Used historical data from an NOAA database to understand more about the impact of earthquakes through the years. </li>
              <li> Project was written in a Jupyter noteook, making use of the Pandas data analytics library in Python. </li>
              <li> Goal was to be exposed to the techniques of making use of programming to transform unstructured data into useful information. </li>
              
            </ul>
          </div>
          <div class="img">
            <img class = "proj-img" src = "../assets/earthquake.png"/>
            <a href = "https://github.com/nishantsatpathy/Earthquake-Data-Analysis" target = "_blank"><div class = "proj-overlay proj-overlay-blur">
              <div class = "proj-link"> Visit Github Repo &#128279; </div>
            </div> </a>
          </div>
        </div>
        <div class = "proj-back">
          <div class="txt">
            <h2 class = "title"> Polynomial Calculator </h2>
            <ul>
              <li> A polynomial calculator which can perform basic arithmetic operations on two polynomials. </li>
              
              <li> Addition, Subtraction, Multiplication and Exponentiation of polynomials could be performed. Evaluating the polynomial at a certain numerical value was also implemented. </li>
              <li> Calculator was implemented primarily using the LinkedList data structure </li>
              <li> Project was written in Java </li>
              <li> The first programming project I ever worked on. </li>
              
            </ul>
          </div>
          <div class="img">
            <img class = "proj-img" src = "../assets/calculator.png"/>
            <a href = "https://github.com/nishantsatpathy/Polynomial-Calculator" target = "_blank"><div class = "proj-overlay proj-overlay-blur">
              <div class = "proj-link"> Visit Github Repo &#128279; </div>
            </div> </a>
          </div>
        </div>
        <div class = "proj-back">
          <div class="txt">
            <h2 class = "title"> Campus Connector Simulator </h2>
            <ul>
              <li> Software project simulating the movement of UMN Campus Connector buses along registered routes </li>
              <li> Modified baseline simulator to change capacities of buses dependent on the time of the day </li>
              <li> Bus markers dynamically change color and opacity depending on number of passengers and which route it is on. </li>
              <li> Information about stops in terms of coordinates and number of people waiting can be obtained from the drop down menu </li>
              <li> Project written in C++ and front-end written in ReactJS. </li>
              
            </ul>  
          </div>
          <div class="img">
            <img class = "proj-img" src = "../assets/simulation.png"/>
            <a href = "https://youtu.be/fphiwrQvd7E" target = "_blank"><div class = "proj-overlay proj-overlay-blur">
              <div class = "proj-link"> View Demo &#127909; </div>
            </div> </a>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

h1 {
  padding-top:2%;
  color: white;
  font-family:'Exo', sans-serif;
  font-size: 25px;
  font-weight:normal;
  margin-left: 3%;
  margin-right: 3%;
  padding-bottom: 1.5%;
}

h2 {
  color: rgb(54, 53, 53);
  font-family:'Exo', sans-serif;
  font-size: x-large;
}

h3 {
  color: rgb(54, 53, 53);
  font-family:'Exo', sans-serif;
  font-size: large;
  font-weight: bold;
}
span {
  float: right;
}

.back {
    background-image: url('../assets/kayak.png');
    background-size: cover;
    height: 100vh;
}

img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (max-width: 1024px) { /* Specific to this particular image */
  img.bg {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}

.proj-back{
  text-align: left;
  display: inline-flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 3%;
  margin-left: 3%;
  margin-right: 3%;
  width:94%;
  border-radius: 15px;
}

.proj {
  margin: auto;
  padding-bottom: 0.5%;
  padding-top: 85px;
  
}

.txt {
  color: rgb(54, 53, 53);
  font-family:'Exo', sans-serif;
  font-size: large;
  max-width: 60%;
  word-wrap: break-word;
  margin:3%;
}


li {
  list-style-type: disc;
  margin-bottom:3%;
  margin-left: 3%;
}

.img {
  position: relative;
  align-items: right;
  height:100%;
  
  margin:3%;
}

.proj-img {
  display: block;
  width: 100%;
}

.proj-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  color: rgb(54, 53, 53);
  display: flex;
  font-family:'Exo', sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size:x-large;
  opacity: 0;
  transition: 0.25s;
  cursor: pointer;
}

.proj-overlay-blur {
  backdrop-filter: blur(5px);
}

.proj-overlay > * {
  transform: translateY(20px);
  transition: transform 0.25s;
}
.proj-overlay:hover {
  opacity: 1;
}

.proj-overlay:hover > * {
  transform: translateY(0)
}
</style>