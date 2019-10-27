<template>
  <div class="navbar">
    <div class="navbarMenu">
      <div v-on:click="sendToNewPage('')" class="homeSet">
        <img src="../assets/iconos/home.png" />
        <p class="significadoOculto">Home</p>
      </div>

      <div v-on:click="sendToNewPage('skills')"  class="homeSet">
        <img src="../assets/iconos/settings.png" />
        <p class="significadoOculto">Skills</p>
      </div>

      <div v-on:click="sendToNewPage('projects')" class="homeSet">
        <img src="../assets/iconos/atom.png" />
        <p class="significadoOculto">Projects</p>
      </div>

      <div class="homeSet" v-on:click="sendToNewPage('about')">
        <img src="../assets/iconos/eye.png" />
        <p class="significadoOculto">About</p>
      </div>

      <div class="homeSet" v-on:click="sendToNewPage('contact')">
        <img src="../assets/iconos/mail.png" />
        <p class="significadoOculto">Contact</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendToNewPage(event){
      //this.$store.commit("setpaginaElegida", event)
      this.$router.push(`/${event}`);
    }
  },
};
</script>

<style scoped>
.navbar {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vw;
  background-color: #1d1d1d;
  display: grid;
  padding-top: 25vh;
  width: 4.5rem;
}

.navbarMenu {
  padding: 0 10px;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  text-align: center;
  color: whitesmoke;
  height: 3rem;
}

.navbarMenu p {
  margin-top: 1rem;
  font-size: 0.6rem;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  margin-bottom: 0rem;
  color: #08fdd8;
}

.homeSet {
  cursor: pointer;
  height: 2rem;
}

.homeSet:hover img {
  display: none;
}

.homeSet:hover .significadoOculto {
  transition: 300ms ease-in-out;
  display: inline;
}

.significadoOculto {
  display: none;
}
</style>

Azul fosforito: #08fdd8;
:style="{}"
