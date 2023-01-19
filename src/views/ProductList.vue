<template>

  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" xs="12" sm="6" md="4" lg="3">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>

</template>
    
<script>
import ProductCard from '../components/ProductCard.vue'

import store from '@/store/index.js'

export default {
  components: {
    ProductCard
  },
  async beforeRouteEnter() {
    await store.dispatch('getProducts')
  },
  computed: {
    products() {
      return store.state.products
    }
  }
}
</script>
    
<style style scoped>

</style>