<template>
  <div :class="isOpen ? [ 'addEvent','addEvent--active'] : 'addEvent' ">
      <form class="addEvent__form">
            <header class="addEvent__header">
                <h3>Add Event</h3>
            </header>
            <input class="addEvent__form__title" placeholder="title" type="text">
            <textarea class="addEvent__form__detail" name="" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>
      </form>
     
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    data(){
      
    },
    computed : {
        ...mapState({
            isOpen : (state) => state.toggleModule.addEventModal
        })
    }
}
</script>

<style>
.addEvent{
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

.addEvent--active{
    visibility: visible;
    opacity: 1;
    transform: translate(-50%,-50%) scale(1);
}

.addEvent__header{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.addEvent__header h3{
    color: white;
    font-size: 20px;
    text-align: center;

}

.addEvent__form{
    padding-left: 20px;
    padding-right: 20px;
}

.addEvent__form__title{
    width: 100%;
    height: 50px;
    background: none;
    color: white;
    border: 1px solid #6966FF;
    margin-top: 30px;
    border-radius: 5px;
  
}


.addEvent__form__detail{
    width: 100%;
    height: 200px;
    background: none;
    color: white;
    border: 1px solid #6966FF;
    margin-top: 30px;
    border-radius: 5px;
  
}

.addEvent__form button{
    height: 50px;
    width: 150px;
    background: #6966FF;
    color: white;
     margin-top: 30px;
     border: none;
}

</style>