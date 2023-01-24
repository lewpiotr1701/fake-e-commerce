<template>
  <div>
    <p>
      Oops, we could't find that page. Try going
      <router-link :to="{ name: 'Homepage' }">home</router-link>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>