<template>
  <v-card class="mx-auto bg-grey-lighten-4" max-width="344" elevation="12">

    <v-carousel hide-delimiters show-arrows="hover" height="200px">
      <v-carousel-item v-for="(image, i) in product.images" :key="i" :src="image" cover></v-carousel-item>
    </v-carousel>

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.price }} $
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text">
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ product.description }} </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>

</style>