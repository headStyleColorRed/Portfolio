<template>
  <div class="projects">
    <div  :style="{opacity:opacidad,  transition: '1s ease-in-out'}"  class="projectsWrapp">
      <h1>
        Work &
        <br />Projects
      </h1>
      <v-timeline dark class="temporalidad">
        
        <!--    C L O T H E S    S T O R E       -->
        <v-timeline-item small color="#CF8B0C">
          <span slot="opposite" class="opposite">
            <p class="textoExplicacion">
              <span class="fecha">03/2018 -</span>This is a PWA app that I developed from scratch while living in China. With this project I learned the ins and outs of the Vue framework and how to manage a multi-language app. Technologies used:
              <br />
              <span class="enAzul">PWA / Vue / Vuetify / Axios</span>
            </p>
          </span>

          <div class="cuadradoThumbnailWrapper">
            <div
              class="cuadradoThumbnail"
              style="gridTemplateColumns:1fr; backgroundColor: #23423A"
            >
              <img class="thumbnailImg" src="../assets/fotos/vestidos.png" alt />
              <h3>E-Store</h3>
            </div>
            <div class="cuadradoThumbnailBack">
              <p>Check my App in Google Play:</p>
              <a target="_blank" href="https://shop-store-ec247.firebaseapp.com/">
                <p class="botonGooglePlay">Go!</p>
              </a>
            </div>
          </div>
        </v-timeline-item>

        <!--  R E S T A U R A N T S   S H O P    -->
        <v-timeline-item small color="#CF8B0C">
          <span slot="opposite" class="opposite">
            <p class="textoExplicacionDerecha">
              <span class="fecha">03/2018 -</span>This is a PWA app that I developed from scratch while living in China. With this project I learned the ins and outs of the Vue framework and how to manage a multi-language app. Technologies used:
              <br />
              <span class="enAzul">PWA / Vue / Vuetify / Axios</span>
            </p>
          </span>

          <div class="cuadradoThumbnailWrapperDerecha">
            <div class="cuadradoThumbnailDerecha">
              <img class="thumbnailImgDerecha" src="../assets/fotos/restaurante.png" alt />
              <h3 style="font-family: 'Amatic SC', cursive;font-size:3rem">La Cavatina</h3>
            </div>
            <div class="cuadradoThumbnailBackDerecha">
              <p>Check my App in Google Play:</p>
              <a target="_blank" href="https://restauranteshop-4a866.web.app/">
                <p class="botonGooglePlay">Go!</p>
              </a>
            </div>
          </div>
        </v-timeline-item>

        <!--    T R A V E L    C H I N A      -->
        <v-timeline-item small color="#CF8B0C">
          <span slot="opposite" class="opposite">
            <p class="textoExplicacion">
              <span class="fecha">03/2018 -</span>This is a PWA app that I developed from scratch while living in China. With this project I learned the ins and outs of the Vue framework and how to manage a multi-language app. Technologies used:
              <br />
              <span class="enAzul">PWA / Vue / Vuetify / Axios</span>
            </p>
          </span>

          <div class="cuadradoThumbnailWrapper">
            <div class="cuadradoThumbnail" style=" backgroundColor: #153A8A">
              <img class="thumbnailImg" src="../assets/fotos/china.jpg" alt />
              <img class="chineseIcono" src="../assets/fotos/chino.png" alt />
              <h3>Learn Chinese in 10 Days</h3>
            </div>
            <div class="cuadradoThumbnailBack">
              <p>Check my App in Google Play:</p>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.travelchina.tendays&gl=ES"
              >
                <p class="botonGooglePlay">Go!</p>
              </a>
            </div>
          </div>
        </v-timeline-item>

        <!--  R E S T A U R A N T S   S H O P    -->
        <v-timeline-item small color="#CF8B0C">
          <span slot="opposite" class="opposite">
            <p class="textoExplicacionDerecha">
              <span class="fecha">03/2018 -</span>This is a PWA app that I developed from scratch while living in China. With this project I learned the ins and outs of the Vue framework and how to manage a multi-language app. Technologies used:
              <br />
              <span class="enAzul">PWA / Vue / Vuetify / Axios</span>
            </p>
          </span>

          <div class="cuadradoThumbnailWrapperDerecha">
            <div class="cuadradoThumbnailDerecha" style="backgroundColor: #23423A">
              <img class="thumbnailImgDerecha" src="../assets/fotos/helios.png" alt />
              <h3 style="font-family: 'Ubuntu', sans-serif;font-size:3rem; color:black;">Helios</h3>
            </div>
            <div class="cuadradoThumbnailBackDerecha">
              <p>Check my App in Google Play:</p>
              <a target="_blank" href="https://helios-a844e.firebaseapp.com/">
                <p class="botonGooglePlay">Go!</p>
              </a>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacidad: 0,};
  },
  mounted() {
    setTimeout(() => {
      
    this.opacidad = 1;
    }, 100);
  },
  components: {
  }
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
.opposite {
  display: grid;
}
.textoExplicacion {
  color: whitesmoke;
  font-size: 0.9rem;
  width: 20vw;
  justify-self: right;
}
.textoExplicacionDerecha {
  color: whitesmoke;
  font-size: 0.9rem;
  width: 20vw;
}
.fecha {
  color: rgb(207, 139, 12);
}
.cuadradoThumbnail {
  position: absolute;
  top: 0;
  left: 0;
  height: 25vh;
  width: 20vw;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  cursor: pointer;
  transition: 400ms ease-in-out;
  z-index: 2;
}
.cuadradoThumbnailWrapper:hover > .cuadradoThumbnail {
  opacity: 0;
  transform: translate(200px);
}
.cuadradoThumbnail h3 {
  color: white;
  z-index: 2;
  justify-self: center;
  align-self: center;
  font-family: "Merienda", cursive;
  font-weight: 300;
}
.thumbnailImg {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}
.chineseIcono {
  height: 13vh;
  z-index: 2;
  justify-self: center;
  align-self: center;
}
.enAzul {
  color: #08fdd8;
}
.cuadradoThumbnailBack {
  position: absolute;
  top: 0;
  left: 0;
  color: whitesmoke;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1rem;
}
.botonGooglePlay {
  font-family: "Merienda", cursive;
  color: whitesmoke;
  font-weight: 300;
  cursor: pointer;
  transition: 200ms ease-in-out;
  border: 1px solid whitesmoke;
  padding: 0.2rem 1.3rem;
  border-radius: 5px;
  margin-top: 3rem;
}
.botonGooglePlay:hover {
  color: #08fdd8;
  border: 1px solid #08fdd8;
}
a {
  text-decoration: none;
}
/*  //////////     D E R E C H A    ///////////   */
.cuadradoThumbnailWrapperDerecha {
  display: grid;
}
.cuadradoThumbnailDerecha {
  position: absolute;
  top: 0;
  right: 0;
  height: 25vh;
  width: 20vw;
  text-align: center;
  background-color: rgb(138, 21, 21);
  padding: 2rem;
  cursor: pointer;
  transition: 400ms ease-in-out;
  z-index: 2;
  display: inherit;
}
.cuadradoThumbnailWrapperDerecha:hover > .cuadradoThumbnailDerecha {
  opacity: 0;
  transform: translate(-200px);
}
.cuadradoThumbnailDerecha h3 {
  color: white;
  z-index: 2;
  justify-self: center;
  align-self: center;
  font-family: "Merienda", cursive;
  font-weight: 300;
}
.thumbnailImg {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.6;
}
.cuadradoThumbnailBackDerecha {
  justify-self: right;
  color: whitesmoke;
  text-align: center;
  font-size: 0.9rem;
}
.thumbnailImgDerecha {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}
</style>

Azul fosforito: #08fdd8;
font-family: 'Merienda', cursive;
style=" backgroundColor: #153A8A"