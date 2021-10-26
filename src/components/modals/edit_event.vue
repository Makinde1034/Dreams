<template>
  <div class="wrap">
    <div :class="is_open ? [ 'editEvent','editEvent--active'] : 'editEvent' ">
      <form @submit.prevent="add_event" class="editEvent__form">
            <header class="editEvent__header">
                <h3>Edit Event</h3>
            </header>
            <input v-model="event.title" required class="editEvent__form__title" placeholder="title" type="text">
            <textarea v-model="event.details" required class="editEvent__form__detail" name="" id="" cols="30" rows="10"></textarea>
            <button>
                <p v-if="!loading">Add event</p>
                <div v-else class="loader"></div>
            </button>
            <p class="status">{{status}}</p>
      </form>
     
    </div>
  </div>
    
</template>

<script>

import { mapState } from 'vuex'

export default {
    data(){
      return{
        event : {
            title : "",
            details : ""
        }
          
      }
    },
    methods:{
      
       
    },
    computed : {
          ...mapState({
              is_open : (state) => state.toggleModule.editModal
          })
    }
}
</script>

<style scoped >

.editEvent{
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
   
}

.editEvent--active{
    visibility: visible;
    opacity: 1;
    transform: translate(-50%,-50%) scale(1);
}

.editEvent__header{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.editEvent__header h3{
    color: white;
    font-size: 20px;
    text-align: center;

}

.editEvent__form{
    padding-left: 20px;
    padding-right: 20px;
}

.editEvent__form__title{
    width: 100%;
    height: 50px;
    background: none;
    color: white;
    border: 1px solid #6966FF;
    margin-top: 30px;
    border-radius: 5px;
  
}


.editEvent__form__detail{
    width: 100%;
    height: 200px;
    background: none;
    color: white;
    border: 1px solid #6966FF;
    margin-top: 30px;
    border-radius: 5px;
  
}

.editEvent__form button{
    height: 50px;
    width: 150px;
    background: #6966FF;
    color: white;
     margin-top: 30px;
     border: none;
     display: flex;
     align-items: center;
     justify-content: center;
}

.loader{
  height: 10px;
  width: 10px;
  background: white;
  border-radius: 100%;
  animation: load 0.5s ease infinite alternate;
}

@keyframes load {
  0%{
    transform: translateX(5px);
    opacity: 1;
  }
  50%{
    transform: translateX(10px);
    opacity: 0;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
}

.err_msg{
  font-size: 14px;
  color: rgb(223, 84, 84);
  text-align: center;
  margin-top: 10px;
}

.status{
    color: white;
    font-size: 16px;
    margin-top: 20px;
}
@media screen and  (min-width:320px) and (max-width:480px) {
  /* *{
    border: 1px solid red;
  } */

  .wrap{
    padding-left: 20px;
    padding-right: 20px;
    
  }


  .editEvent{
    width: 95%;
  }
  
}

</style>