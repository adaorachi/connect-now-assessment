<template>
  <div id="nav" class="nav">
    <div v-for="link in navLinks" :key="link.name" class="nav_list">
      <router-link :to="link.route" class="nav_list_link">{{link.name}}</router-link>
      <div v-if="$route.name == link.overlayText" class="link_overlay_text">{{link.overlayText}}</div>
    </div>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navLinks: Array,
  }
}
</script>

<style>
.nav {
  padding: 0 0 40px;
  display: flex;
}
.nav .nav_list {
  position: relative;
}
.nav .nav_list_link,
.nav .link_overlay_text {
  text-transform: uppercase;
}
.nav .nav_list_link {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 20px;
  display: block;
}
.nav .link_overlay_text {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 30px;
  font-weight: bold;
  color: #5692e8;
  opacity: 0.2;
  pointer-events: none;
} 

@media (max-width: 576px) {
  .nav {
    flex-direction: column;
  }
}
</style>