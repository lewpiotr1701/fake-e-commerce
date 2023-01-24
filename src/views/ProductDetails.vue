<template>
  <div>
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
  data() {
    return {
      product: this.$store.state.product
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
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>