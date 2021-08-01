<template>
  <v-app>
    <AppBar :pages="pages" />
    <v-alert
      v-if="error"
      border="right"
      colored-border
      type="error"
      elevation="2"
    >
      <p>
        Error: Oops something went wrong :( Please contact system administrator.
      </p>
    </v-alert>

    <v-progress-linear v-if="loading" class="loading" value="15" />

    <div id="content-wrapper">
      <router-view :names="names" />
    </div>

    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    AppBar,
    Footer
  },
  computed: mapState(["error", "loading", "names"]),
  data() {
    return {
      pages: ["table", "info"]
    };
  }
};
</script>

<style scoped>
#content-wrapper {
  margin-top: 10vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

.loading {
  position: absolute;
  margin-top: 9vh;
}
</style>
