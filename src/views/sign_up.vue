<template>
  <div class="form__wrap">
   <form @submit.prevent="register_user" class="form" action="">
    <header class="form__header">
      <h3>Sign up</h3>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L120,144C240,160,480,192,720,176C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </header>
    <div class="form__header__input">
      <div class="form__input__box">
        <label  for="Email">Username</label>
        <input v-model="user_info.username" placeholder="example494" type="text">
      </div>
      <div class="form__input__box">
        <label  for="Email">Email</label>
        <input v-model="user_info.email" placeholder="example494" type="text">
      </div>
      <div class="form__input__box">
        <label  for="Email">Password</label>
        <input v-model="user_info.password" placeholder="example494" type="text">
      </div>
    </div>
    <div class="form__button">
      <button>
        <p v-if="!is_loading">Sign up</p>
        <div v-else class="loader"></div>
      </button>
    </div>
    <p class="form_p">Already have an account ? Register</p>
    <p class="err_msg">{{err_msg}}</p>
   </form>
  </div>
</template>

<script scoped>

import { mapActions,mapState } from 'vuex'

export default {
  data(){
    return {
      user_info : {
        username : "",
        email: "",
        password : ""
      }
    }
  },
  methods : {
    ...mapActions('authModule',['REGISTER_USER']),
    register_user(){
      this.REGISTER_USER(this.user_info)
    }

  },
  computed : {
    ...mapState({
      is_loading : (state) => state.authModule.loading,
      err_msg : (state) => state.authModule.error_message
    })
  },
  mounted(){
    const token = localStorage.getItem("token");

    if(token){
      this.$router.push("/dashboard")
    }
  }
}
</script>

<style>
body{
  background: #1A1A27;
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



.form__wrap{
  display: flex;
  padding-top: 50px;
  justify-content: center;
  border-radius: 5px;
}

.form{
  height: 580px;
  background: white;
  width: 379px;
  border-radius: 5px;
}


.form__header{
  padding-top: 50px;
  background: #6966FF;
}

.form__header h3{
  text-align: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.form__header svg{
  display: block;
}

.form__header__input{
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  flex-direction: column;
  
  
}

.form__input__box{
  width: 100%;
}

.form__input__box label {
  font-size: 14px;
  font-weight: 500;
}

.form__header__input input{
  width: 100%;
  height: 40px;
  border: 1px solid #7B7B84;
  border-radius: 5px;
  margin-bottom: 30px;
  margin-top: 10px;
  padding-left: 10px;
  
}

.form__button{
  padding-left: 30px;
  padding-right: 30px;
}

.form__button button{
  width: 100%;
  height: 40px;
  background: #6966FF;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form_p{
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
  cursor: pointer;
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

</style>