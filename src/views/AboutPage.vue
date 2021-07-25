<template>
    <div class = "back">
      <img class ="bg" src="../assets/bc.png">
        <div id="nav">
            <router-link to='/'><img src="../assets/brand1.png"></router-link>
            <div>
              <router-link to="/about">About Me</router-link>   |
              <router-link to="/experiences"> Experiences</router-link>   |
              <router-link to="/projects">Projects</router-link>   
              <!-- <router-link to="/aspirations">Fun Facts!</router-link> -->
            </div>
        </div>
        <div class = "about container">
          <div class="text container">
            <img id="myimg" src="../assets/nishant.jpg">
            <div id = "content-back">
              <div id = "content" ref = "content">
                Hello! I am a student pursuing my Master's of Computer Science in Rice University. I graduated from the University of Minnesota
                with a Bachelor's of Science in Computer Science. 
                <br><br>
                Tech Stack: 
                <ul>
                  <li> Programming Languages: Python, Java, C++, C, OCaML </li>
                  <li> Frontend Web Frameworks: Vue, React, HTML/CSS </li>
                  <li> Backend Web Frameworks: Flask, Express, Node, Firebase, Heroku </li>
                  <li> Database Frameworks: mySQL, Postgres, noSQL </li>
                </ul>
                <br>
                Areas of Interest:
                <ul>
                  <li> Natural Language Processing: Speech Recognition and translation.</li>
                  <li> Data Analytics in the field of Sports: F1 Motorsport, Tennis, Cricket. </li>
                  <li> Full Stack Application Development in the Medical Field </li>
                </ul>
                <br>
                My Professional Bucket List: 
                <ul>
                  <li> Publish a research paper as the first author. </li>
                  <li> Build and release an app from the ground up. </li>
                  <li> Attend my first tech conference focused on NLP </li>
                </ul>
                <div class = "flip" href = "content"><div class = "arrow-close" v-on:click = "changeVisible"></div></div>
              </div>
              
              <div id = "content2" ref = "content2">
                <div class = "flips"><div class = "arrow-open" v-on:click = "changeVisible2"></div></div>
                A day with no work and no lethargy? Catch me doing ATLEAST ONE of the following:
                <ul class = "check">
                  <li> Playing tennis. A HUGE Rafa Nadal Fan! </li> 
                  <li> Gaming. I play COD Warzone, Rocket League and Formula 1 on my PC I built during the pandemic.</li> 
                  <li> Taking photographs. Fun Fact: The background pictures in this website are pictures I have taken! </li>
                  <li> Travel... from my bedroom to the living room. #ThanksCOVID </li>
                </ul>
                <br>
                My Personal Bucket List:
                <ul class = "bucket">
                  <li> Watching all four tennis Grand Slam Finals. </li>
                  <li> Watch a Formula One Grand Prix. </li>
                  <li> Fly first class in Emirates. </li>
                  <li> Witness the Aurora Borealis. </li>
                  <li> Go camping in a national park where the Milky Way is visible! </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div id="fact"> Fun Fact: The background pictures are not from Google Photos, but are taken by me on the iPhone!</div> -->
        </div>
    </div>
</template>

<script>
  //import $ from "jquery";
  
  export default {
    methods: {
      changeVisible: function() {
        // let disp = this.$refs.content.style.display;
        // let disp2 = this.$refs.content2.style.display;
        // console.log(disp);
        // console.log(disp2);
          this.$refs.content.style.display = "none";
          this.$refs.content2.style.display = "block";
      },
      changeVisible2: function() {
        this.$refs.content.style.display = "block";
        this.$refs.content2.style.display = "none";
      }
    }
  }
  // function changeVisible() {
  //   var disp = document.getElementById("content").style.display;
  //   //var disp2 = document.getElementById("content2").style.display;
  //   if (disp === "none") {
  //     document.getElementById("content").style.display = "";
  //   }
  //   else {
  //     document.getElementById("content").style.display = "none";
  //   }
  // }
</script>

<style scoped>

#fact{
  padding-top: 5%;
  font-size: x-large;
  color: white;

  font-family: 'Exo', sans-serif;
}

.back {
    background-image: url('../assets/bc.png');
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

#myimg {
  height: 30%;
  width: 30%;
  margin-right: 20px;
  border-radius: 15px;
}

#content-back {
  height:30%;
  background-color: rgba(153, 152, 152, 0.25);
  width: 70%;
  border-radius: 15px;
}

#content {
  padding: 4%; 
  text-align: left;
  font-weight: bold;
  font-family: 'Exo', sans-serif;
  color: white;
  padding-bottom: 1.5%;
}

#content2 {
  display: none;
  padding: 4%;
  text-align: left;
  font-weight: bold;
  font-family: 'Exo', sans-serif;
  color: white;
  padding-top: 1.5%; 
}

.about {
  padding-top: 7%;
  padding-left: 2%;
  padding-right: 3%;
}

.text{
  margin: auto;
  display: inline-flex;
}

ul {
  padding-left: 2.25%;
}

li {
  list-style-type: disc;
}

.flip {
  display: flex;
  justify-content: center;
  padding-top: 2%;
}

.flips {
  display: flex;
  justify-content: center;
  padding-bottom: 2%;
}

.arrow-open {
   position: relative;
   width: 53px;
   height: 20px;
   cursor: pointer;
   transition: all 0.25s ease;
}
 .arrow-open:before, .arrow-open:after {
   position: absolute;
   content: '';
   width: 54%;
   height: 2px;
   background: rgb(255, 255, 255);
   top: 49%;
   border-radius: 5px;
}
 .arrow-open:before {
   transform: rotate(150deg);
   left: 0;
}
 .arrow-open:after {
   transform: rotate(-150deg);
   right: 0;
}

.arrow-open:hover {
  transform: scale(1.15);
}

.arrow-close {
   position: relative;
   width: 53px;
   height: 20px;
   cursor: pointer;
   transition: all 0.25s ease;
   
}
 .arrow-close:before, .arrow-close:after {
   position: absolute;
   content: '';
   width: 54%;
   height: 2px;
   background: rgb(255, 255, 255);
   top: 49%;
   border-radius: 5px;
   
}
 .arrow-close:before {
   transform: rotate(-150deg);
   left: 0;
}
 .arrow-close:after {
   transform: rotate(150deg);
   right: 0;
}

.arrow-close:hover {
  transform: scale(1.15);
}
 
ul.check > li:nth-child(1) {
  padding-top: 2%;
  padding-bottom: 0.75%;
  list-style: "\1F3BE";
  padding-left: 1%;
}

ul.check > li:nth-child(2) {
  padding-bottom: 0.75%;
  list-style: "\1F3AE";
  padding-left: 1%;
}

ul.check > li:nth-child(3) {
  padding-bottom: 0.75%;
  list-style: "\1F4F8";
  padding-left: 1%;
}

ul.check > li:nth-child(4) {
  list-style: "✈️";
  padding-left: 1%;
}

ul.bucket > li:nth-child(1) {
  padding-top: 2%;
  padding-bottom: 0.75%;
  list-style: "\1F3BE";
  padding-left: 1%;
}

ul.bucket > li:nth-child(2) {
  padding-bottom: 0.75%;
  list-style: "\1F3CE";
  padding-left: 1%;
} 

ul.bucket > li:nth-child(3) {
  padding-bottom: 0.75%;
  list-style: "✈️";
  padding-left: 1%;
}

ul.bucket > li:nth-child(4) {
  padding-bottom: 0.75%;
  list-style: "\2728";
  padding-left: 1%;
}

ul.bucket > li:nth-child(5) {
  list-style: "\1F30C";
  padding-left: 1%;
}
</style>