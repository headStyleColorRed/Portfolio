<template>
  <div class="navbar">
    <div class="navbarMenu">
      <div v-on:click="sendToNewPage('')" class="homeSet">
        <img src="../assets/iconos/home.png" />
        <p class="significadoOculto">Home</p>
      </div>

      <div v-on:click="sendToNewPage('skills')" class="homeSet">
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

    <div class="navbarMobile">
      <div class="hamburguer">
        <v-icon v-on:click="drawer = !drawer">fas fa-bars</v-icon>
      </div>

        <v-navigation-drawer  v-model="drawer" absolute temporary dark >
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="../assets/fotos/perfil.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Rodrigo Labrador</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>

              <v-list-item-content >
                <v-list-item-title v-on:click="sendToNewPage(item.title)" >{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
          { title: 'Home' },
          { title: 'Skills' },
          { title: 'Projects' },
          { title: 'About' },
          { title: 'Contact'},
        ],
    };
  },
  methods: {
    sendToNewPage(event) {
      if (event == "Home")
        event = '';
      else
        event = event.toLowerCase();
      this.$router.push(`/${event}`);
    }
  }
};
</script>

<style scoped>
.navbarMenu {
  display: none;
}

.navbarMobile{
  background-color: #25262700;
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 50vw;
  padding: 1rem;
  }

.hamburguer{
  position: fixed;
  padding: 5px 7px;
  background-color: #252627;
}

/*-------------- FULL SCREEN ----------------*/
@media only screen and (min-width: 1001px) {
  .navbarMobile{
    display: none;
  }
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
}
</style>

Azul fosforito: #08fdd8;
:style="{}"
