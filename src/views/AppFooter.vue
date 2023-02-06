<template>
  <v-footer class="bg-grey-lighten-1" app absolute>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
        <router-link :to="{ name: link }">
          {{ link }}
        </router-link>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: ['Homepage', 'About']
    }
  }
}
</script>

<style scoped>
footer {}

a {
  text-decoration: none;
  color: inherit;
}
</style>