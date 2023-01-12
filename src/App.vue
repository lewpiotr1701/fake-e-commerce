<template>
  <v-app :theme="theme">
    <AppBar />
  </v-app>
</template>

<script>
import AppBar from './views/AppBar.vue'

export default {
  components: {
    AppBar
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
