<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Fake e-commerce</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      @click.stop="toggleTheme">Toggle
      Theme</v-btn>

    <v-btn variant="text" icon="mdi-basket"></v-btn>
    <v-btn variant="text" icon="mdi-account"></v-btn>
  </v-app-bar>

  <NavigationDrawer />
</template>

<script>
import NavigationDrawer from '../components/NavigationDrawer.vue'

export default {
  components: { NavigationDrawer },
  methods: {
    toggleTheme() {
      this.$store.state.theme === 'light'
        ? this.$store.dispatch('toggleTheme', 'dark')
        : this.$store.dispatch('toggleTheme', 'light')
    },
    toggleDrawer() {
      this.$store.state.isDrawer === false
        ? this.$store.dispatch('toggleDrawer', true)
        : this.$store.dispatch('toggleDrawer', false)
    }
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