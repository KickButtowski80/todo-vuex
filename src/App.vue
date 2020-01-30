<template>
  <v-app>
  <v-tabs fixed-tabs>
      <v-tab to="/">Home</v-tab>
      <v-tab to="/about">About</v-tab>
    </v-tabs>
    <router-view></router-view>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss" scoped>
.v-tabs{
  flex: none
}
 
</style>

