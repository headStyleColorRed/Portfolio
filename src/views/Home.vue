<template>
  <div class="home">
    <div :style="{opacity:opacidad,  transition: '1s ease-in-out'}" class="homeWRapper">
      <div class="landing">
        <h1>
          Hello, I'm
          <span id="Nombre" v-on:click="$router.push('/loadingPage')">Rodrigo Labrador.</span>
          <br />Self-taught web developer.
        </h1>
        <p class="características">
          Front End Developer
          <span class="separador">/</span> Vue.js
          <span class="separador">/</span> Firebase
        </p>
      </div>
      <h1 class="checkMyWork" v-on:click="$router.push('/projects')">Check My Work</h1>
      <img class="flechArrow" src="../assets/iconos/flechaDerecha.png" alt />
      <img class="flechaIzquierda" src="../assets/iconos/flechaIzquierda.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotacion: "rotate(0deg)",
      opacidad: 0
    };
  },
  mounted() {
    console.log(this.$store.getters.veces);
    if (this.$store.getters.veces == 0) {
      this.$store.commit("setVeces", 1);
      this.$router.push("/loadingPage");
    } else {
      setTimeout(() => {
        this.opacidad = 1;
      }, 100);
    }
  },
  methods: {
    butonShowWork() {
      console.log("jejej hola");
    }
  },
  components: {}
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  background-color: #252627;
}

.homeWRapper {
  height: 100vh;
}

.landing {
  color: whitesmoke;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
}

.landing h1 {
  font-size: 2.8rem;
  font-family: roboto;
  font-weight: 100;
  line-height: 4rem;
}

#Nombre {
  color: rgb(207, 139, 12);
  font-weight: 300;
}

.características {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgb(143, 143, 143);
}

.separador {
  margin: 0 1rem;
}

.flechArrow {
  position: absolute;
  top: 60%;
  left: 15%;
  transform: translate(-50%, -50%);
}

.flechaIzquierda {
  position: absolute;
  top: 60%;
  right: 10%;
  transform: translate(-50%, -50%);
}

.checkMyWork {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Reenie Beanie", cursive;
  color: whitesmoke;
  font-weight: 100;
  cursor: pointer;
  transition: 200ms ease-in-out;
  border: 1px solid whitesmoke;
  padding: 0.2rem 1.3rem;
  border-radius: 5px;
}

.checkMyWork:hover {
  color: #08fdd8;
  border: 1px solid #08fdd8;
}
</style>
