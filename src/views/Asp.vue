<template>
    <div class="back">
        <div id="nav">
            <router-link to='/'><img src="../assets/brand1.png"></router-link>
            <div>
                <router-link to="/about">About Me</router-link>   |
                <router-link to="/experiences"> Experiences</router-link>   |
                <router-link to="/projects">Projects</router-link>   |
                <router-link to="/aspirations">Aspirations</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.back {
    background-image: url('../assets/rak.png');
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
</style>