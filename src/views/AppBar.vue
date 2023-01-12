<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Fake e-commerce</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="toggleTheme">Toggle
      Theme</v-btn>

    <v-btn variant="text" icon="mdi-basket"></v-btn>
    <v-btn variant="text" icon="mdi-account"></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
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