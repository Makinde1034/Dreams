<template>
  <nav class="nav">
       <router-link to="/">
         <h2>Rudder</h2>
       </router-link>
    
      <ul>
        <router-link to="/signin">About</router-link>
        <router-link to="/signin">Signin</router-link>
        <router-link to="/signup">
            <button>Sign up</button>
        </router-link>>
        
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    height: 80px;
    background: #1A1A27;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
}

.nav h2{
    color: white;
}

.nav ul{
    display: flex;
    width: 25%;
    justify-content: space-between;
    list-style-type: none;
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
;
}
</style>