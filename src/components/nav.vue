<template>
  <nav class="nav">
       <router-link to="/">
         <h2>Rudder</h2>
       </router-link>
    
      <ul>
        <router-link  v-if=" !token"   to="/signin">About</router-link>
        <router-link v-if="!token "   to="/signin">Signin</router-link>
        <router-link  v-if="!token"   to="/signup">
            <button>Sign up</button>
        </router-link>
        
      </ul>
      <div class="menu">
          <img src="../assets/list.png" alt="">
      </div>
      <button v-if="token" class="logout">Logout</button>
  </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed : {
        ...mapState({
            status : (state) => state.authModule.status,
            token : (state) => state.authModule.token
        })
    },

    mounted(){
        
       
    }
}
</script>

<style scoped>
.nav{
    height: 80px;
    background: #1A1A27;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
}

.nav h2{
    color: white;
    font-family: 'Montserrat', sans-serif;

}

.nav ul{
    display: flex;
    width: 25%;
    justify-content: space-between;
    align-items: center;
}

.nav a{
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
}

.nav ul button{
    padding: 10px 20px;
    background: #6966FF;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.2s;
;
}

.nav ul button:hover{
    opacity: 0.6;
}

.logout{
     padding: 10px 20px;
    background: #6966FF;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.2s;
}

.menu{
    display: none;
}

.menu img{
    display: none;
}

@media screen and  (min-width:280px) and (max-width:480px) {
    .nav{
         padding-left: 20px;
        padding-right: 20px;
    }
    .nav ul {
        display: none;
       
    }

    .logout{
        display: none;
    }

    .menu img{
        height: 25px;
        display: block;
    }

    
}
</style>