<template>
  <div class="app_button_content">
    <button @click="handleClick" class="app_button">{{label}}</button>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      label: String,
      handleClick: Function,
    }
  }
</script>

<style>
.app_button_content {
  text-align: right;
}
.app_button {
  outline: none;
  border: none;
  background: #5692e8;
  width: 80px;
  height: 40px;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
}
</style>