<template>

  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" xs="12" sm="6" md="4" lg="3">
        <!-- <v-sheet elevation="12">
          <ProductCard :product="product" />
        </v-sheet> -->
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>

</template>
    
<script>
import ProductService from '../services/ProductService.js'
import ProductCard from '../components/ProductCard.vue'
import { watchEffect } from 'vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      len: 3
    }
  },
  created() {
    watchEffect(() => {
      ProductService.getProducts()
        .then(res => this.products = res.data.products)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
  }
}
</script>
    
<style style scoped >

</style>