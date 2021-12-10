<template>
  <div v-if="type === 'loading'" class="loader_content">
    <img src="../assets/images/loader-icon.svg" />
  </div>
  <div v-else-if="type === 'error'" class="error_content">
    An error occured.
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    type: String,
  }
}
</script>

<style>
.loader_content {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader_content img {
  width: 30px;
  height: 30px;
}
.error_content {
  padding: 20px;
  background: #0d1a2b;
  font-size: 0.9rem;
}
</style>