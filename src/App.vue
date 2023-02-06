<template>
  <v-app :theme="theme">
    <AppBar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppBar from './views/AppBar.vue'
import AppFooter from './views/AppFooter.vue'

export default {
  components: {
    AppBar,
    AppFooter
  },
  computed: {
    theme() {
      return this.$store.state.theme
    }
  }
}
</script>

<style scoped>

</style>
