<template>
  <button @click="signUp = ! signUp">SignUp/Login</button>
  <div class="home" v-if='signUp'>
    <h1>register today!</h1>
    <br>
    <input type="text" v-model="name" placeholder="name">
    <br>
    <br>
    <input type="text" v-model="surname" placeholder="surname">
    <br>
    <br>
    <input type="number" v-model="age" placeholder="age">
    <br>
    <br>
    <input type="text" v-model="fav_coding_lang" placeholder="coding language">
    <br>
    <br>
    <input type="text" v-model="fav_car" placeholder="favorite car">
    <br>
    <br>
    <input type="text" v-model="eye_colour" placeholder="eye colour">
    <br>
    <br>
    <input type="text" v-model="username" placeholder="username">
    <br>
    <br>
    <input type="password" v-model="password" placeholder="password">
    <br>
    <br>
    <button @click="addUser()">Sign up</button>
  </div>
  <div class="about" v-else>
    <h1>login in</h1>
    <input type="text" v-model="username" placeholder="username">
    <br>
    <br>
    <input type="password" v-model="password" placeholder="password">
    <br>
    <br>
    <button @click="loginUser()">Login</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
      return{
        name:'',
        surname:'',
        age:'',
        fav_coding_lang:'',
        fav_car:'',
        eye_colour:'',
        username:'',
        password:'',
        signUp:true
      }
    }, methods:{
      addUser(){
        this.$store.dispatch('addUser',this.$data)
      },
      loginUser(){
        this.$store.dispatch('loginUser',this.$data)
        // location.reload()
      },
  }
}
</script>
