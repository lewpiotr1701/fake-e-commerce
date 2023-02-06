<template>
  <div v-if="product" class="product-view">
    {{ product.brand }}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      // pass a function that returns what we want to watch fro changes
      () => this.$route.params,
      () => {
        this.$store.dispatch('getProduct', this.id)
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  computed: {
    product() {
      return this.$store.state.product
    }
  }
}
</script>

<style scoped>
.product-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  margin: 100px auto 0;
  background-color: red;
}
</style>