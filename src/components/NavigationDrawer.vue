<template>
  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>

      <router-link :to="{ name: 'Homepage' }">
        <v-list-item prepend-icon="mdi-home" title="Home" link></v-list-item>
      </router-link>

      <router-link :to="{ name: 'About' }">
        <v-list-item prepend-icon="mdi-information" title="About" link></v-list-item>
      </router-link>

      <v-divider></v-divider>

      <router-link :to="{ name: 'ProductList' }">
        <v-list-item prepend-icon="mdi-view-list" title="Products" link></v-list-item>
      </router-link>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['isDrawer'],
  computed: {
    drawer() {
      return this.isDrawer
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>