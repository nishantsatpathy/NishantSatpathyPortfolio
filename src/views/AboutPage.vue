<template>
    <div class = "back">
        <div id="nav">
            <router-link to='/'><img src="../assets/brand1.png"></router-link>
            <div>
              <router-link to="/about">About Me</router-link>   |
              <router-link to="/experiences"> Experiences</router-link>   |
              <router-link to="/projects">Projects</router-link>   |
              <router-link to="/aspirations">Aspirations</router-link>
            </div>
        </div>
        <div class = "about container">
          <div class="text container">
            <img id="myimg" src="../assets/nishant.jpg">
            <div id = "content-back">
              <div id = "content">
                Hi! I am Nishant Satpathy and to be very honest, I don't know what is it that I actually do. Full Stack Developer? Data Scientist? Systems Engineer?
                <br><br>
                I received my Bachelor's of Science in Computer Science from the University of Minnesota, Twin Cities. After a two month break, I will
                be joining Rice University to pursue my Master's in Computer Science.
                <br><br>
                Tech Stack: 
                <ul>
                  <li> Programming Languages: Python, Java, C++, C, OCaML </li>
                  <li> Frontend Web Frameworks: Vue, React, HTML/CSS </li>
                  <li> Backend Web Frameworks: Flask, Express, Node, Firebase, Heroku </li>
                  <li> Database Frameworks: mySQL, Postgres, noSQL </li>
                  <li> ML Frameworks: Pytorch, AutoML </li>
                  <li> HPC Frameworks: CUDA, openMP, MPI </li>
                </ul>
                <br>
                Areas of Interest:
                <ul>
                  <li> Natural Language Processing: Speech Recognition and translation.</li>
                  <li> Data Analytics in the field of Sports: F1 Motorsport, Tennis, Cricket. </li>
                  <li> Full Stack Application Development in the Medical Field </li>
                  <li> Quantum Computing </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div id="fact"> Fun Fact: The background pictures are not from Google Photos, but are taken by me on the iPhone!</div> -->
        </div>
    </div>
</template>

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
}

#content-back {
  height:30%;
  background-color: rgba(153, 152, 152, 0.25);
  width: 70%;
}

#content {
  padding: 4%;
  text-align: left;
  
  font-family: 'Exo', sans-serif;
  color: white;
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
</style>