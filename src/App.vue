<template>
  <div>
    <Nav />
    <MobileNav />
    <ModalBackground />
    <router-view v-slot="{Component}">
      <transition name="route">
        <component :is="Component" ></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
import MobileNav from './components/modals/mobile_nav.vue'
import ModalBackground from './components/modals/modal_background.vue'


export default {
  name: 'App',
  components: {
    Nav,
    MobileNav,
    ModalBackground
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}


/* Route transition */
.route-enter-from{
  opacity: 0;
  /* transform: translateX(100px); */
}

.route-enter-active{
  transition: all 0.5s ease-out;
}

.route-leave-to{
  opacity: 0;
  /* transform: translateX(-100px); */
}

.route-leave-active{
  transition: all 0.5s ease-in;
}
</style>
