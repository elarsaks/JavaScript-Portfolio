<template>
  <div id="app-bar-wrapper">
    <v-app-bar color="primary" dense dark>
      <v-app-bar-title>NAMES</v-app-bar-title>
      <v-tabs centered>
        <v-tab v-for="page in pages" :key="page" :to="page">
          {{ page }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  props: {
    pages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
#app-bar-wrapper {
  position: fixed;
  width: 100%;
}
</style>
