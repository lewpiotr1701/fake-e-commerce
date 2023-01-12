<template>

  {{ product }}
  <ProductCard />

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
      product: null
    }
  },
  created() {
    watchEffect(() => {
      ProductService.getProduct(1)
        .then(res => this.product = res.data)
        .catch(err => console.log(err))
    })
  }
}
</script>

<style scoped>

</style>