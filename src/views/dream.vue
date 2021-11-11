<template>
  <div class="wrap" v-for="event in events" :key="event._id" >
      <div class="dream"  v-if="event._id === event_id">
          <h3>{{event.title}}</h3>
          <p>{{event.details}}</p>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
        return{
            event_id : this.$route.params.id 
        }
    },
    computed:{
        ...mapState({
            events : (state) => state.eventModule.events
        })
    }
}
</script>

<style scoped>
.wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.dream{
    color: white;
    text-align: center;
}
</style>