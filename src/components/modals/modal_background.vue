<template>
  <div @click="close_modal" :class=" is_modal_open || is_delete_modal_open || is_edit_modal_open ||is_mobile_nav_open ? ['modalBackground','modalBackground--active'] : 'modalBackground' " >

  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
    methods:{
        ...mapActions("toggleModule",["CLOSE_EVENT_MODAL"]),

        close_modal(){
            this.CLOSE_EVENT_MODAL();
        }
    },
    computed : {
        ...mapState({
            is_modal_open : (state) => state.toggleModule.addEventModal,
            is_delete_modal_open : (state) => state.toggleModule.deleteModal,
            is_edit_modal_open : (state) => state.toggleModule.editModal,
            is_mobile_nav_open : (state) => state.toggleModule.mobileModal
        })
    }
}
</script>

<style scoped>
.modalBackground{
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
    visibility: hidden;
    transition: 0.5s ease;opacity : 0;
    
   
}

.modalBackground--active{
    visibility: visible;
    opacity : 1;
}
</style>