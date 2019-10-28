<template>
  <div class="skills">
    <div :style="{opacity:opacidad,  transition: '1s ease-in-out'}" class="skillsWrapp">
      <div class="leftPart">
        <h1>
          Skills &
          <br />Experience
        </h1>
        <p>The main area of my expertise is front end development (client side of the web).</p>
        <p>HTML, CSS, JS, building small and medium web apps with Vue, Firebase, custom plugins, animations and coding interactive layouts.</p>
        <p>
          Visit my blog
          <span>
            <a
              class="tangerineCoder"
              href="https://tangerine-coder.firebaseapp.com/"
            >Tangerine Coder</a>
          </span> for more details or just
          <span class="contact" v-on:click="$router.push('/contact')">contact</span> me.
        </p>
      </div>
      <div class="rightPart">
        <div v-for="(skill, index) in skills" :key="index" class="habilidadesThumbnail">
          <p>{{skill.nombre}}</p>
          <div class="barraProgreso">
            <p v-if="!loaded" :style="{width: skill.longitudCero}" class="barraNaranja2"></p>
            <p
              v-else
              :style="{width: skill.longitud, transition: '800ms ease-in-out'}"
              class="barraNaranja2"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        0: {
          nombre: "Html5 / Css3",
          longitud: "15rem",
          longitudCero: "0rem"
        },
        1: {
          nombre: "JavaScript",
          longitud: "14rem",
          longitudCero: "0rem"
        },
        2: {
          nombre: "Node.js",
          longitud: "11rem",
          longitudCero: "0rem"
        },
        3: {
          nombre: "Git & GitHub",
          longitud: "15rem",
          longitudCero: "0rem"
        },
        4: {
          nombre: "Object Oriented Programming",
          longitud: "14rem",
          longitudCero: "0rem"
        },
        5: {
          nombre: "C && Unix",
          longitud: "9rem",
          longitudCero: "0rem"
        },
        6: {
          nombre: "Firebase",
          longitud: "14rem",
          longitudCero: "0rem"
        }
      },
      loaded: false,
      opacidad: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.opacidad = 1;
    }, 100);
    setTimeout(() => {
      this.loaded = true;
    }, 700);
  },
  components: {}
};
</script>

<style scoped>
/*-------------- FULL SCREEN ----------------*/
@media only screen and (min-width: 1001px) {
  .skills {
    height: 100vh;
    width: 100vw;
    background-color: #252627;
    padding-left: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .skillsWrapp {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .leftPart h1 {
    color: rgb(207, 139, 12);
    font-size: 3.5rem;
    line-height: 3rem;
  }

  .leftPart {
    margin-top: 25vh;
    color: whitesmoke;
  }

  .leftPart p {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    width: 30vw;
    margin-bottom: -0.5rem;
  }

  .contact {
    color: rgb(207, 139, 12);
    text-decoration: underline;
    cursor: pointer;
  }

  .tangerineCoder {
    color: rgb(207, 139, 12);
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: rgb(207, 139, 12);
  }

  .rightPart {
    margin-top: 20vh;
    padding-left: 20vw;
  }

  .habilidadesThumbnail {
    display: grid;
    color: whitesmoke;
    font-size: 0.9rem;
    margin-bottom: 1.4rem;
  }

  .barraProgreso {
    margin-top: -0.7rem;
    background-color: rgb(87, 87, 87);
    width: 17rem;
    height: 10px;
  }

  .barraNaranja2 {
    width: 0rem;
    height: 10px;
    background-color: rgb(207, 139, 12);
  }
}


/*-------------- IPHONE 5 ----------------*/
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait)
{
  .skills {
    width: 100vw;
    background-color: #252627;
    display: grid;
  }

  .skillsWrapp {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .leftPart h1 {
    color: rgb(207, 139, 12);
    font-size: 3.5rem;
    line-height: 3rem;
  }

  .leftPart {
    margin-top: 4vh;
    padding-left: 3rem;
    padding-right: 3rem;
    color: whitesmoke;
  }

  .leftPart p {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    margin-bottom: -0.5rem;
  }

  .contact {
    color: rgb(207, 139, 12);
    text-decoration: underline;
    cursor: pointer;
  }

  .tangerineCoder {
    color: rgb(207, 139, 12);
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: rgb(207, 139, 12);
  }

  .rightPart {
    padding-left: 3rem;
  }

  .habilidadesThumbnail {
    display: grid;
    color: whitesmoke;
    font-size: 0.9rem;
    margin-bottom: 1.4rem;
  }

  .barraProgreso {
    margin-top: -0.7rem;
    background-color: rgb(87, 87, 87);
    width: 17rem;
    height: 10px;
  }

  .barraNaranja2 {
    width: 0rem;
    height: 10px;
    background-color: rgb(207, 139, 12);
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