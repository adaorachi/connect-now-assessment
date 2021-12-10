<template>
  <NavBar :navLinks="navLinks" />
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  data () {
    return {
      navLinks: [
        {name: 'Video Games', route: '/', overlayText: 'Video'},
        {name: 'Contact', route: '/contact', overlayText: 'Contact'},
        ]
    }
  },
}
</script>


<style>
#app {
  font-family: 'Mulish', sans-serif;
  color: #c1d1e8;
  padding: 50px;
}

h6,
button,
label,
a {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}
p {
  font-size: 0.8rem;
}
@media (max-width: 576px) {
  #app{
    padding: 10px;
  }
}

</style>
