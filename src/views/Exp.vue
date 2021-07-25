<template>
    <div class="back">
      <img class ="bg" src="../assets/gc.png">
        <div id="nav">
            <router-link to='/'><img src="../assets/brand1.png"></router-link>
            <div>
                <router-link to="/about">About Me</router-link>   |
                <router-link to="/experiences"> Experiences</router-link>   |
                <router-link to="/projects">Projects</router-link>   
                <!-- <router-link to="/aspirations">Fun Facts!</router-link> -->
            </div>
        </div>
        
        <div class = "exp container">
          <h1 class = "title">An overview of the experiences I have taken part in: </h1>
          <div class="exp-back">
            <div class="txt">
              <h2 class = "title"> IT Intern, Ecolab Inc <span>June 2020 - August 2020</span> </h2>
              <h3 class = "title"> Technologies Used: ReactJS, Azure Cosmos, mySQL </h3>
              
              <ul>
                <li> Worked with the front-end and data architecture of the Ecolab Virtual Assistant (EVA) </li>
                <li> End product of the internship was EVA architecture design analysis and recommendations </li>
                <li> Worked with React for the front-end architecture and Cosmos and Workbench for the data architecture </li>
              </ul>
              
            </div>
          </div>
          <div class="exp-back">
            <div class="txt">
              <h2 class = "title"> Undergraduate Researcher, DMR Lab <span>September 2020 - May 2021</span></h2>
              <h3 class = "title"> Technologies Used: Python, Pytorch, Pandas </h3>
              
              <ul>
                <li> Mentored by Jiacheng Liu and supervised by Professor Jaideep Srivastava on my Clinical NLP project </li>
                <li> Prepared summary statistics on the MIMIC-III Dataset using Pandas for identifying top-k notes in terms of note frequency per patient </li>
                <li> Analyzed performance of baseline Conv1D model using clinical notes as training and testing for in-hospital mortality prediction </li>
                <li> Documented research progress, literature review and future steps in my Honor's Thesis </li>
              </ul>
              
            </div>
          </div>
          <div class="exp-back">
            <div class="txt">
              <h2 class = "title"> Senior Capstone Project, Medtronic PLC <span>September 2020 - May 2021</span></h2>
              <h3 class = "title"> Technologies Used: Python, C#, Pandas, SSMS, Jupyter, AutoML, Docker </h3>
           
              <ul>
                <li> Worked with Medtronic PLC on a year long software project for my senior capstone project </li>
                <li> Collaborated with a team of five to develop an interactive data analytics library for scientists specializing in battery data analysis</li>
                <li> End product was a Python library containing data analysis functions, which could be imported in Jupyter notebooks for use. </li>
                <li> Deployment strategies for these notebooks using Docker and AutoML were experimented with, with AutoML being used for final deployment. </li>
              </ul>
            </div>
          </div>
          <div class="exp-back">
            <div class="txt">
              <h2 class = "title"> Undergraduate Teaching Assistant, UMN CSci Department <span>September 2020 - May 2021</span></h2>
              <h3 class = "title"> Technologies Used: Python, Java</h3>
            
              <ul>
                <li> Undergrad TA for CSCI 1133: Intro to Programming and CSCI 1933: Intro to Data Structures and Algorithms </li>
                <li> Provided assistance to students for Java and Python </li>
                <li> Undertook grading and proctoring responsibilities </li>
              </ul>
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
    background-image: url('../assets/gc.png');
    background-size: cover;
    height: 100vh;
    background-attachment: fixed;
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

.exp-back{
  text-align: left;
  padding:2%;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5%;
  width:100%;
  border-radius: 15px;
}

.exp {
  margin: auto;
  padding-bottom: 0.5%;
  
}

.txt {
  color: rgb(54, 53, 53);
  font-family:'Exo', sans-serif;
  font-size: large;
}

ul {
  padding-left: 1.5%;
}

li {
  list-style-type: disc;
}
</style>