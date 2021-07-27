<template>
    <div class="back">
        <!-- <img class = "bg" src="../assets/mudon1.png"> -->
        <div class = "landing container"> 
            <h1 class="title"> NISHANT SATPATHY </h1>
            <transition name="fade"><h2 class="title is-3"> {{me[0]}} </h2></transition>
            <router-link to="/about"><button class = "button is-large"> ABOUT ME </button></router-link>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                me: ['Software Engineer', 'Tennis Player', 'Nomad']
            }
        },

        mounted(){
            window.setInterval(()=>{
                this.characteristics();
            }, 1250);
        },

        methods: {
            characteristics(){
                const first = this.me.shift();
                this.me = this.me.concat(first);
            }
        }
    }   
</script>

<style scoped>

h1, h2 {
    color: white;
    font-family:'Exo', sans-serif;
    font-size: 70px;
}


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

.landing{
    padding-top: 18%;
}

.button {
    background: none;/*this for transparent button*/
    border: 3px solid white;/* this is for button border*/
    position: relative;
    color: white;
    font-weight:bold;
    font-family: 'Exo', sans-serif;
    transition: all 0.5s ease;
}

.button:hover {
    transform: scale(1.1);
}
</style>