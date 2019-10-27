<template>
  <div class="home">
    <div class="homeWrapper">
      <vue-typer
        :text="['Tangerine Coder']"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="100"
        :pre-erase-delay="1000"
        :erase-delay="150"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {   
    setTimeout(() => {
      this.$router.push(`/`)
    }, 4500);
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  background-color: #252627;
}

.homeWrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<style>

.vue-typer .custom.char {
  color: rgb(207, 139, 12);
  font-family: merienda;
  font-size: 1.3rem;
  font-weight: 100;
}
.vue-typer .custom.caret {

  background-color: rgba(207, 139, 12, 0);
}
</style>
