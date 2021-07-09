<template>
  <div class="about">
    <h1 class="openingText">Welcome to The Birthday-Company</h1>
    <form @submit.prevent="">
      <input type="email" placeholder="enter email address " v-model="email" class="input"><br>
      <input type="password" placeholder="enter password" v-model="password" class="input"><br>
      <button type="submit" v-on:click="login" class="button">Submit</button>
    </form>
    <div class="register">
    <span>Need An Account??Click to<router-link :to="{name:'register'}">Register</router-link> </span>
    </div>
    </div>
</template>
<script>
import firebase from "firebase";
import "firebase/auth";
export default {
  
  data(){
    return{
      email:'',
      password:'',
      error:'',
    }
  },methods:{
    login(){
      
      firebase.auth()
      .signInWithEmailAndPassword(this.email,this.password)
     .then( data => {
        this.$router.replace({name:"loginhome"})
        console.log(data)
     }).catch(err => {
        this.error=err.message
        var errr="invalid email or password"
        alert(errr)
      });
      
        
        
      }
    }
  }

</script>
<style>
.input{
  width: 50%;
  outline-style: solid;
  outline-color: black;
  padding: 1%;
  margin: .5%;
}.button{
  color: white;
  background-color: rgb(5, 5, 155);
  border-radius: 30%;
  padding: 1%;
  margin: .5%;
}

</style>
