<template>
  <div>
    <h3>
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </h3>
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