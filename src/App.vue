<template>
  <v-app>
    <navbar />
      <router-view></router-view>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue";
export default {
  name: "App",
  mounted() {
  },
  components: {
    navbar
  }
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>