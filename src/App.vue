
<template>
  <the-header></the-header>
  <router-view></router-view>
</template>


<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
//import ChatArea from "@/components/ChatArea.vue"
export default {
  name: "Home",
  components: {
    TheHeader,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*{
  margin: 0;
  padding:0;
}
</style>


