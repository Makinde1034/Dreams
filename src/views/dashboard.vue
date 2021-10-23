<template>
  <div>
    <div class="dashboard">
        <h3>Hello Bryan, click the add icon to <br> start adding events.</h3>
        
    </div>
    <div>

    </div>
    <!--  -->
    <img @click="open_modal" class="addicon" src="../assets/add.png" alt="">
    <AddEvent />
    <ModalBac />
  </div>
</template>

<script>
import AddEvent from '../components/modals/add_event.vue'
import ModalBac from '../components/modals/modal_background.vue'
import { mapActions} from 'vuex'

export default {
    name:"Dashboard",
    components:{
        AddEvent,ModalBac
    },
    methods:{
        ...mapActions('toggleModule',['OPEN_EVENT_MODAL']),
        open_modal(){
            this.OPEN_EVENT_MODAL()
        }
    },
   
}
</script>

<style scoped>
.dashboard{
    height: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
}

.dashboard h3{
    color: #ECE0E021;
    font-size: 44px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;

}

.addicon{
    position: absolute;
    bottom: 50px;
    right: 150px;
    height: 50px;
    cursor: pointer;
}


</style>