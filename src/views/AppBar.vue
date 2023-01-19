<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Fake e-commerce</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click.stop="toggleTheme"
      class="pa-0"></v-btn>

    <v-btn variant="text" icon="mdi-basket"></v-btn>
    <v-btn variant="text" icon="mdi-account"></v-btn>
  </v-app-bar>

  <NavigationDrawer :isDrawer="drawer" />
</template>

<script>
import NavigationDrawer from '../components/NavigationDrawer.vue'

export default {
  components: { NavigationDrawer },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleTheme() {
      this.$store.state.theme === 'light'
        ? this.$store.dispatch('toggleTheme', 'dark')
        : this.$store.dispatch('toggleTheme', 'light')
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