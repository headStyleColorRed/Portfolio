<template>
  <div class="projects">
    <div :style="{opacity:opacidad,  transition: '1s ease-in-out'}" class="projectsWrapp">
      <div class="leftDiv">
        <h1>Who Am I?</h1>
        <p>I'm an adventurer!</p>
        <p>
          In case you are still wondering, let me explain myself.
          <br />I've been homeschooled until university. Then, while I was studying Political Science I decided that the calm and peaceful life at home was not my "thing", so I decided to join the military! There, I learned determination, sacrifice and to never give up.
        </p>
        <p>
          Once I left the army I began my mountaineering courses and became a Mountain Guide.
          <br />I travelled to China seeking adventures, and in that year not only I learned Chinese but programming too!
          <br />It was then, after having found my two passions when I realized that my goal in life would be to work as a developer while enjoying mountain's nature.
        </p>
      </div>
      <div class="rightDiv">
        <img class="fotoPerfil" src="../assets/fotos/perfil.png" alt />
        <p class="textoPerfil">
          "The greatest danger in life
          <br />is not to take the adventure."
        </p>
        <p class="mallory">-George Mallory</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacidad: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.opacidad = 1;
    }, 100);
  },
  components: {}
};
</script>

<style scoped>

/*-------------- IPHONE 5 ----------------*/
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait){
  
  .projects {
    width: 100vw;
    background-color: #252627;
  }

  .projectsWrapp {
    margin-top: 2rem;
    margin-left: 3rem;
    color: whitesmoke;
    display: grid;
  }

  .leftDiv{
    grid-area: "text";
  }

  .projectsWrapp p {
    text-align: left;
    font-size: 0.9rem;
    font-weight: 300;
    padding-right: 3rem;
  }

  .projectsWrapp h1 {
    text-align: center;
    color: rgb(207, 139, 12);
    margin-bottom: 3rem;
  }

  .rightDiv {
    grid-area: "pic";
    display: grid;
    margin: 2rem;
  }

  .fotoPerfil {
    justify-self: center;
    align-self: center;
    height: 20vh;
    border-radius: 50%;
  }

  .textoPerfil {
    justify-self: center;
    align-self: center;
    text-align: center;
    margin-top: 1rem;
  }

  .mallory {
    text-align: right;
    margin-top: -1rem;
    font-style: oblique;
  }

}

/*-------------- HALF SCREEN ----------------*/
@media only screen and (min-device-width: 500px) and (max-width: 1000px){
  
  
  .projects {
    min-height: 100vh;
    width: 100vw;
    background-color: #252627;
  }

  .projectsWrapp {
    margin-top: 2rem;
    margin-left: 3rem;
    color: whitesmoke;
    display: grid;
  }

  .leftDiv{
    grid-area: "text";
  }

  .projectsWrapp p {
    text-align: left;
    font-size: 0.9rem;
    font-weight: 300;
    padding-right: 3rem;
  }

  .projectsWrapp h1 {
    text-align: center;
    color: rgb(207, 139, 12);
    margin-bottom: 3rem;
  }

  .rightDiv {
    grid-area: "pic";
    display: grid;
    margin: 2rem;
  }

  .fotoPerfil {
    justify-self: center;
    align-self: center;
    height: 20vh;
    border-radius: 50%;
  }

  .textoPerfil {
    justify-self: center;
    align-self: center;
    text-align: center;
    margin-top: 1rem;
  }

  .mallory {
    text-align: right;
    margin-top: -1rem;
    font-style: oblique;
  }


}


/*-------------- FULL SCREEN ----------------*/
@media only screen and (min-width: 1001px) {
  .projects {
    min-height: 100vh;
    width: 100vw;
    background-color: #252627;
  }

  .projectsWrapp {
    margin-top: 15vh;
    margin-left: 10vw;
    color: whitesmoke;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .projectsWrapp p {
    font-size: 0.9rem;
    font-weight: 300;
    width: 30vw;
  }

  .projectsWrapp h1 {
    color: rgb(207, 139, 12);
    margin-bottom: 3rem;
  }

  .rightDiv {
    height: 70vh;
    display: grid;
  }

  .fotoPerfil {
    justify-self: center;
    align-self: center;
    height: 50vh;
    border-radius: 50%;
  }

  .textoPerfil {
    justify-self: center;
    align-self: center;
    text-align: center;
    margin-top: 1rem;
  }

  .mallory {
    text-align: right;
    margin-top: -1rem;
    font-style: oblique;
  }
}
</style>

Azul fosforito: #08fdd8;

/*-------------- IPHONE 5 ----------------*/
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait)


@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)

/*-------------- HALF SCREEN ----------------*/
@media only screen and (min-device-width: 500px) and (max-width: 1000px) 


/*-------------- FULL SCREEN ----------------*/
@media only screen and (min-width: 1001px)