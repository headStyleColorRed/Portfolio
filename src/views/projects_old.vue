<template>
  <div class="projects">
    <div :style="{opacity:opacidad,  transition: '1s ease-in-out'}" class="projectsWrapp">
      <h1>
        Work &
        <br />Projects
      </h1>

      <div class="cards_wrapper">

        <!--    C L O T H E S    S T O R E       -->
        <v-card class="mx-auto" max-width="300" raised>
          <v-img class="white--text align-end" height="150" src="../assets/fotos/vestidos.png"></v-img>

          <h4 class="project_title">FashionHub</h4>

          <v-card-text class="text--primary pt-0">
            <div>Ecommerce website</div>
          </v-card-text>
        </v-card>


        <!--  R E S T A U R A N T S   S H O P    -->
        <v-card class="mx-auto" max-width="300" raised>
          <v-img class="white--text align-end" height="150" src="../assets/fotos/restaurante.png"></v-img>

          <h4 class="project_title">La Cavatina</h4>

          <v-card-text class="text--primary pt-0">
            <div>Restaurant website</div>
          </v-card-text>
        </v-card>

        <!--    T R A V E L    C H I N A      -->
        <v-card class="mx-auto" max-width="300" raised>
          <v-img class="white--text align-end" height="150" src="../assets/fotos/china.jpg"></v-img>

          <h4 class="project_title">Travel China</h4>

          <v-card-text class="text--primary pt-0">
            <div>Chinese PWA app</div>
          </v-card-text>
        </v-card>

        <!--   H E L I O S      -->
        <v-card class="mx-auto" max-width="300" raised>
          <v-img class="white--text align-end" height="150" src="../assets/fotos/helios.png"></v-img>

          <h4 class="project_title">Helios</h4>

          <v-card-text class="text--primary pt-0">
            <div>CryptoCurrency Website</div>
          </v-card-text>
        </v-card>

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
.temporalidad {
  display: grid;
  grid-gap: 5rem;
}
.projects {
  min-height: 100vh;
  width: 100vw;
  background-color: #252627;
  padding: 0 10vw;
  padding-top: 2rem;
}

.projectsWrapp {
  padding-bottom: 15vh;
}

.projectsWrapp h1 {
  color: rgb(207, 139, 12);
  font-size: 3.5rem;
  line-height: 3rem;
}

.cards_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 3rem;
  grid-gap: 3rem
}

.project_title{
  padding: 0.5rem;
  margin-left: 1rem;
}
</style>

Azul fosforito: #08fdd8;
font-family: 'Merienda', cursive;
style=" backgroundColor: #153A8A"