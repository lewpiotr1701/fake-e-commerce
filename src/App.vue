<template>
  <v-app :theme="theme">
    <AppBar />
    <v-main>
      <ProductList />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './views/AppBar.vue'
import ProductList from './views/ProductList.vue';

export default {
  components: {
    AppBar,
    ProductList
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
