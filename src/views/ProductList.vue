<template>
  <div v-if="isLoading" class="progress-circular">
    <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
  </div>
  <v-container v-if="products">
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
  // async beforeRouteEnter() {
  //   await store.dispatch('getProducts')
  // },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      // pass a function that returns what we want to watch fro changes
      () => this.$route.params,
      () => {
        this.$store.dispatch('getProducts')
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  computed: {
    products() {
      return store.state.products
    },
    isLoading() {
      return store.state.isLoading
    }
  }
}
</script>
    
<style style scoped>
.progress-circular {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>