<template>
  <div>
      <div :class=" mobile_nav ? ['mobileNav', 'mobileNav--active'] : 'mobileNav' ">
          <ul>
              <router-link v-if="!token" to="/signin" @click="close_mobile_modal" >Sign in</router-link>
              <router-link v-if="!token" to="/signup" @click="close_mobile_modal" >Sign up</router-link>
              <li v-if="token" @click="log_out">Log out</li>
              <li>About</li>
              <!-- <li>Sign out</li> -->
          </ul>
      </div>
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
        ...mapActions('toggleModule',['CLOSE_MOBILE_MODAL']),
        ...mapActions('authModule',['LOG_OUT']),

        close_mobile_modal(){
            this.CLOSE_MOBILE_MODAL()
        },
        log_out(){
            this.LOG_OUT();
        }

    },
    computed:{
        ...mapState({
            mobile_nav : (state) => state.toggleModule.mobileModal,
            token : (state) => state.authModule.token
        })
    }
    
}
</script>

<style>
.mobileNav{
    height: 200px;
    width: 300px;
    background:#232334;
    position: fixed;
    transform: translate(-50%,-50%)translateY(30px);
    top: 50%;
    left: 50%;
    border-radius: 5px;
    visibility: hidden;
    z-index: 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease;
    opacity: 0;
    
}

.mobileNav--active{
    visibility: visible;
    transform: translate(-50%,-50%)translateY(0px);
    opacity: 1;
    
}

.mobileNav ul{
    color: white;
    display: flex;
    flex-direction: column;
    list-style: none;
}

.mobileNav a{
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 20px;
}

.mobileNav li{
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
}
</style>