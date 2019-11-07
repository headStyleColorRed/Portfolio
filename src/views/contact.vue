<template>
  <div class="projects">
    <div class="projectsWrapp" :style="{opacity:opacidad,  transition: '1s ease-in-out'}">
      <div class="leftPart">
        <h1>Contact me</h1>
        <p class="presentation">
          I am full of enthusiasm, energy and I will wellcome any offer either at a small startup, or a big corporation.
          <br />If you have any question, don't hesitate to contact me through my email
          <a
            href="mailto:tangerineCoder@gmail.com"
            class="my_mail"
          >tangerineCoder@gmail.com</a>, using the form at your right, or through the social media websites underneath.
        </p>

        <div class="web_presence">
          <div class="iconos">
            <div class="twitter celda">
              <v-icon class="pointer" color="#00aced">fab fa-twitter</v-icon>
              <p>Twitter</p>
            </div>
            <div v-on:click ="send_to_web('github')" class="git_hub celda">
              <v-icon class="pointer" color="orange">fab fa-github</v-icon>
              <p>Github</p>
            </div>
            <div  v-on:click ="send_to_web('linkedin')" class="linkedin celda">
              <v-icon class="pointer" color="#0077B5">fab fa-linkedin</v-icon>
              <p>Linkedin</p>
            </div>
            <div class="instagram celda">
              <v-icon class="pointer" color="#DD2A7B">fab fa-instagram</v-icon>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div class="rightPart">
        <div class="form">
          <div class="name_and_email">
            <div class="name">
              <input type="text" placeholder="Name" />
            </div>
            <div class="email">
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div class="subject">
            <input type="text" placeholder="Subject" />
          </div>
          <div class="message">
            <textarea name="textarea" class="t_a" placeholder="Message"></textarea>
          </div>
          <div class="send_button">
            <p>SEND</p>
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
  methods: {
    send_to_web(event) {
      if (event == "github")
        window.open("https://github.com/headStyleColorRed", "_blank");
      else if (event == "linkedin")
        window.open("https://www.linkedin.com/in/rodrigo-labrador-serrano-07b9a013b/", "_blank");

    }
  },
  components: {}
};
</script>

<style scoped>
/*-------------- IPHONE 5 ----------------*/
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
  .projects {
    width: 100vw;
    background-color: #252627;
    display: grid;
  }

  .projectsWrapp {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .leftPart h1 {
    color: rgb(207, 139, 12);
    font-size: 3.5rem;
    line-height: 3rem;
    margin-top: 3rem;
    text-align: center;
  }

  .leftPart {
    color: whitesmoke;
  }

  .presentation {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    padding: 2rem;
  }

  .my_mail {
    color: #08fdd8;
  }

  .web_presence {
    color: whitesmoke;
    display: grid;
  }

  .iconos {
    font-weight: 300;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    justify-self: left;
    grid-gap: 2rem;
  }

  .celda {
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
  }

  .celda p {
    justify-self: center;
  }

  .pointer {
    margin-top: -1rem;
  }

  a {
    text-decoration: none;
  }

  .rightPart {
    color: rgb(216, 214, 214);
  }

  .lefPartMovile {
    display: none;
  }

  .form {
    margin-top: 2rem;
    display: grid;
  }

  .name_and_email {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .name {
    height: 3rem;
    background-color: #2f3031;
    display: grid;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  .email {
    height: 3rem;
    background-color: #2f3031;
    display: grid;
    padding-left: 1rem;
  }

  .subject {
    height: 3rem;
    background-color: #2f3031;
    margin-bottom: 1rem;
    display: grid;
    padding-left: 1rem;
  }

  .message {
    height: 14rem;
    background-color: #2f3031;
    padding: 1rem;
  }

  .send_button {
    text-align: center;
    margin-top: 2rem;
    color: rgb(207, 139, 12);
    cursor: pointer;
  }

  .t_a {
    height: 100%;
    width: 100%;
    resize: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
}

/*-------------- HALF SCREEN ----------------*/
@media only screen and (min-device-width: 500px) and (max-width: 1000px) {
  .projects {
    width: 100vw;
    background-color: #252627;
    display: grid;
  }

  .projectsWrapp {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .leftPart h1 {
    color: rgb(207, 139, 12);
    font-size: 3.5rem;
    line-height: 3rem;
    margin-top: 3rem;
    text-align: center;
  }

  .leftPart {
    color: whitesmoke;
  }

  .presentation {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    padding: 2rem;
  }

  .my_mail {
    color: #08fdd8;
  }

  .web_presence {
    color: whitesmoke;
    display: grid;
  }

  .iconos {
    font-weight: 300;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    justify-self: left;
    grid-gap: 2rem;
  }

  .celda {
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
  }

  .celda p {
    justify-self: center;
  }

  .pointer {
    margin-top: -1rem;
  }

  a {
    text-decoration: none;
  }

  .rightPart {
    color: rgb(216, 214, 214);
  }

  .lefPartMovile {
    display: none;
  }

  .form {
    margin-top: 2rem;
    display: grid;
  }

  .name_and_email {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .name {
    height: 3rem;
    background-color: #2f3031;
    display: grid;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  .email {
    height: 3rem;
    background-color: #2f3031;
    display: grid;
    padding-left: 1rem;
  }

  .subject {
    height: 3rem;
    background-color: #2f3031;
    margin-bottom: 1rem;
    display: grid;
    padding-left: 1rem;
  }

  .message {
    height: 14rem;
    background-color: #2f3031;
    padding: 1rem;
  }

  .send_button {
    text-align: center;
    margin-top: 2rem;
    color: rgb(207, 139, 12);
    cursor: pointer;
  }

  .t_a {
    height: 100%;
    width: 100%;
    resize: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
}

/*-------------- FULL SCREEN ----------------*/
@media only screen and (min-width: 1001px) {
  .projects {
    min-height: 100vh;
    width: 100vw;
    background-color: #252627;
    padding-left: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .projectsWrapp {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .leftPart h1 {
    color: rgb(207, 139, 12);
    font-size: 3.5rem;
    line-height: 3rem;
  }

  .leftPart {
    margin-top: 10vh;
    color: whitesmoke;
  }

  .presentation {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    width: 35vw;
    margin-bottom: -0.5rem;
  }

  .my_mail {
    color: #08fdd8;
  }

  .web_presence {
    margin-top: 4rem;
    color: whitesmoke;
    display: grid;
  }

  .iconos {
    font-weight: 300;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    justify-self: left;
    grid-gap: 2rem;
  }

  .celda {
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
  }

  .celda p {
    justify-self: center;
  }

  .pointer {
    margin-top: -1rem;
  }

  a {
    text-decoration: none;
  }

  .lefPartMovile {
    display: initial;
  }

  .rightPart {
    padding-left: 5rem;
    width: 45vw;
    color: rgb(216, 214, 214);
  }

  .form {
    margin-top: 7rem;
    display: grid;
  }

  .name_and_email {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
  }

  .name {
    background-color: #2f3031;
    display: grid;
    padding-left: 1rem;
  }
  .email {
    background-color: #2f3031;
    display: grid;
    padding-left: 1rem;
  }

  .subject {
    height: 3rem;
    background-color: #2f3031;
    margin-bottom: 1rem;
    display: grid;
    padding-left: 1rem;
  }

  .message {
    height: 14rem;
    background-color: #2f3031;
    padding: 1rem;
  }

  .send_button {
    text-align: center;
    margin-top: 2rem;
    color: rgb(207, 139, 12);
    cursor: pointer;
  }

  .t_a {
    height: 100%;
    width: 100%;
    resize: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
}
</style>






@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)

/*-------------- HALF SCREEN ----------------*/
@media only screen and (min-device-width: 500px) and (max-width: 1000px) 


/*-------------- FULL SCREEN ----------------*/
@media only screen and (min-width: 1001px)