<template>
  <div>
    {{ product }}
  </div>
</template>

<script>
import ProductService from '../services/ProductService.js'
import { watchEffect } from 'vue'

export default {
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