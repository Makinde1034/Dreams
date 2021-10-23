<template>
  <div :class=" is_modal_open ? ['modalBackground','modalBackground--active'] : 'modalBackground' " >

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed : {
        ...mapState({
            is_modal_open : (state) => state.toggleModule.addEventModal
        })
    }
}
</script>

<style>
.modalBackground{
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
    visibility: hidden;
   
}

.modalBackground--active{
    visibility: visible;
}
</style>