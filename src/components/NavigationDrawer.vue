<template>
  <v-navigation-drawer v-model="isDrawer" location="left" temporary>
    <v-list>

      <router-link :to="{ name: 'Homepage' }">
        <v-list-item prepend-icon="mdi-home" title="Home" link></v-list-item>
      </router-link>

      <router-link :to="{ name: 'About' }">
        <v-list-item prepend-icon="mdi-information" title="About" link></v-list-item>
      </router-link>

      <v-divider></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    isDrawer() {
      return this.$store.state.isDrawer
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