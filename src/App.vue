<template>
  <v-app>
    <AppBar />

    <v-main>
      content from App.vue
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './views/AppBar.vue'

export default {
  components: { AppBar }
}
</script>

<style scoped>

</style>
