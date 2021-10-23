<template>
  <div class="home" >
    <img src="../assets/undraw_friendship_mni7.svg" alt="">
    <h3>The travel diary you <br> ever dreamed of.</h3>
    <p>Write your memories on your card, love, happy, joy, sometimes...sad and painful. You fill in all your feelings.</p>
    <button>Sign up</button>
  </div>
</template>



<script>
import { mapState } from 'vuex'
import api from '../adapter/api.js'


export default {
  name: "Home",
  components : {},
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      name : (state) => state.authModule.name
    })
  },
  mounted(){
    api.validateToken().then(()=>{
      this.$router.push("/signup")
    }).catch((err)=>{
      console.log(err.response)
      localStorage.clear()
    })
  }
}
</script>




<style scoped>
*{
  margin: 0;
  padding: 0;
}

body{
    background: #1D1B29;
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.home {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


.home{
  padding-top: 50px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.home img{
  height: 300px;

}

.home h3{
  text-align: center;
  font-size: 50px;
  font-family: 'Montserrat', sans-serif;
}

.home p{
  font-family: sans-serif;
  width: 30%;
  text-align: center;
  line-height: 20px;
  margin-top: 20px;
}

.home button{
  padding: 10px 30px;
  background: #6966FF;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}
</style>