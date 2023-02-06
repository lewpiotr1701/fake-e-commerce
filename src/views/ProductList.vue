<template>
  <v-progress-circular v-if="isLoading" class="progress-circular" model-value="20" size="94" width="10" indeterminate />
  <v-container v-else>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" xs="12" sm="6" md="4" lg="3">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>

  <div v-if="isProductOpen" @click.self="closeModal" class="modal-bg">
    <router-view></router-view>
  </div>

</template>
    
<script>
import ProductCard from '../components/ProductCard.vue'
import store from '@/store/index.js'

export default {
  components: {
    ProductCard
  },
  created() {
    this.$store.dispatch('getProducts')
  },
  computed: {
    products() {
      return store.state.products
    },
    isLoading() {
      return store.state.isLoading
    },
    isProductOpen() {
      return this.$route.name === 'ProductDetails'
    }
  },
  methods: {
    closeModal() {
      this.$router.push({ name: 'ProductList' })
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

.modal-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>