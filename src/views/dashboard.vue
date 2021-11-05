<template>
  <div class="wrap">
    <div v-if="events.length === 0" class="dashboard">
      <h3>Hello Bryan, click the add icon to <br> start adding events.</h3>
    </div>
    <div v-else class="dashboardActive" >
      <div class="dashboardActive__div" v-for="(event,index) in events" :key="index" >
        <h3>{{event.title}}</h3>
        <p>{{event.details.slice(1,30)}}...</p>
        <div class="icons">
          <img src="../assets/share.png" alt="share icon">
          <img @click="open_edit_modal(title=event.title,details=event.details,_id=event._id)" src="../assets/edit.png" alt="edit icon">
          <img @click="delete_event(event._id)" src="../assets/delete.png" alt="delete icon">
        </div>

      </div>
      
    </div>
    <!--  -->
    <img @click="open_event_modal" class="addicon" src="../assets/add.png" alt="">
    <AddEvent />
    <ModalBac />
    <DeleteEventModal />
    <EditEvent />
  </div>
</template>

<script>
import AddEvent from '../components/modals/add_event.vue'
import ModalBac from '../components/modals/modal_background.vue'
import DeleteEventModal from '../components/modals/delete_modal.vue'
import { mapActions, mapState} from 'vuex'
import api from '../adapter/api.js'
import EditEvent from '../components/modals/edit_event'

export default {

  name:"Dashboard",
  components:{
    AddEvent,ModalBac,DeleteEventModal,EditEvent
  },
  methods:{
    ...mapActions('toggleModule',['OPEN_EVENT_MODAL']),
    ...mapActions("eventModule",["GET_EVENTS"]),
    ...mapActions("toggleModule",["OPEN_DELETE_MODAL"]),
    ...mapActions("toggleModule",["OPEN_EDIT_MODAL"]),
    

    open_event_modal(){
      this.OPEN_EVENT_MODAL()
    },

    delete_event(_id){
      const data = {
        event_id : _id
      }
      this.OPEN_DELETE_MODAL(data)
    },

    open_edit_modal(title,details,_id){
      const data = {
        title,
        details,
        _id
      }
      this.OPEN_EDIT_MODAL(data)
    }
  },
  computed : {
    ...mapState({
      events : (state) => state.eventModule.events
    })
  },
  mounted(){
    api.validateToken().then(()=>{
      this.$router.push("/dashboard")
    }).catch(()=>{
      this.$router.push("/signin")
      localStorage.clear()
    })

    // 
    this.GET_EVENTS();
    
  
  }
   
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
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 50px;
  cursor: pointer;
}

/* 
.dashboardActive{
  padding-top: 50px;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  display: grid; 

  grid-template-columns: 300px 300px 300px 300px; 
  grid-template-rows: 150px 150px 150px; 
  gap: 50px 50px; 
  grid-template-areas: 
    ". . . ."
    ". . . ."
    ". . . ."; 
    

} */

.dashboardActive{
  
  display: grid;
  grid-template-columns: auto auto auto auto ;
  
  /* grid-template-rows: auto auto auto; */
  /* justify-content: center; */
  gap: 50px 50px;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 50px;


}

.dashboardActive__div{
  background: #232334;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  filter: brightness(1.2);
  padding: 10px;
  position: relative;
  height : 150px;
  width:300px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.dashboardActive__div h3{
  color: white;
   font-family: 'Montserrat', sans-serif;
   font-size: 14px;

}

.dashboardActive div p{
  color: white;
  font-weight: 400;
  margin-top: 10px;
}

.icons{
  position: absolute;
  bottom: 10px;
}

.icons img {
  margin-right: 15px;
  width: 13px;
  height: 14px;
  cursor: pointer;
}

@media screen and  (min-width:280px) and (max-width:480px) {
  /* *{
    border: 1px solid red;
  } */


  .wrap{
    align-items: center;
    padding-bottom: 100px;
  }

  .dashboardActive{
    /* grid-template-columns: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;

  }

  .dashboardActive__div{
    max-width: 100%;
  }

  .addicon{
    right: 20px;
    height: 50px;
  }
  
}

</style>