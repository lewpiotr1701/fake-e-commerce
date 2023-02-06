<template>
  <v-app-bar color="primary" prominent app>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Fake e-commerce</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click.stop="toggleTheme"
      class="pa-0"></v-btn>

    <v-btn variant="text" icon="mdi-basket"></v-btn>
    <v-btn variant="text" icon="mdi-account"></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>

      <router-link :to="{ name: 'Homepage' }">
        <v-list-item prepend-icon="mdi-home" title="Home" link></v-list-item>
      </router-link>

      <router-link :to="{ name: 'About' }">
        <v-list-item prepend-icon="mdi-information" title="About" link></v-list-item>
      </router-link>

      <v-divider></v-divider>

      <router-link :to="{ name: 'ProductList' }">
        <v-list-item prepend-icon="mdi-view-list" title="Products" link></v-list-item>
      </router-link>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
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
a {
  text-decoration: none;
  color: inherit;
}
</style>