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

    <v-progress-linear v-if="loading" value="15" />

    <div id="content-wrapper">
      <router-view :names="names" />
    </div>

    <Footer />
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import Names from './repository/Names.js'

export default {
  name: 'App',
  components: {
    AppBar,
    Footer,
  },
  data() {
    return {
      loading: false,
      names: [],
      error: null,
      pages: ['table', 'reverse-table'],
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.loading = true

      Names.getNames(this.$route.name)
        .then(names => {
          this.loading = false
          console.log(names)
          this.names = names
        })
        .catch(err => (this.error = err))
    },
  },
}
</script>

<style scoped>
#content-wrapper {
  margin-top: 10vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
