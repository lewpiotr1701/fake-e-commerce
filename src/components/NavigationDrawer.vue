<template>
  <v-navigation-drawer v-model="isDrawer" location="left" temporary>
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }
  },
  computed: {
    isDrawer() {
      return this.$store.state.isDrawer
    }
  }
}
</script>

<style scoped>

</style>