<template>
    <div :class="isOpen ? [ 'deleteEvent','deleteEvent--active'] : 'deleteEvent' ">
        <p>Are you sure you want to delete event ?</p>
        <button 
        @click="delete_event">Delete</button>
    </div>
</template>

<script>

import { mapState,mapActions } from 'vuex'

export default {
    data(){
      return{
       
          
      }
    },
    methods:{
       ...mapActions("eventModule",["DELETE_EVENT"]),

       delete_event(){
           this.DELETE_EVENT()
       }
    },
    computed : {
        ...mapState({
            isOpen : (state) => state.toggleModule.deleteModal
        })
    }
}
</script>

<style scoped>

.deleteEvent{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) scale(0.8);
    width: 500px;
    background: #232334;
    border-radius: 10px;
    padding-bottom: 30px;
    visibility: hidden;
    transition: 0.5s ease;
    opacity: 0;
    z-index: 4;
    background: ;
    height: 200px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}

.deleteEvent p{
    text-align: center;
    font-size: 18px;
    color: white;
}

.deleteEvent--active{
    visibility: visible;
    opacity: 1;
    transform: translate(-50%,-50%) scale(1);
}

.deleteEvent button{
      padding: 10px 20px;
    background: #6966FF;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    margin-top: 20px;
}

</style>