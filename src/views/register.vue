<template>
<div>
    <h2>CREATE NEW ACCOUNT</h2>
    <form  @submit.prevent="">
        <label>First name :</label>
        <input type="text" placeholder="first name" v-model="firstname"><br>
        <label>Last name :</label>
        <input type="text" placeholder="last name" v-model="lastname"><br>
        <label>Email :</label>
        <input type="email" placeholder="email address" v-model="email"><br>
        <label>Password :</label>
        <input type="password" placeholder="password" v-model="password"><br>
        <button type="submit" v-on:click="create">Create account</button>
        </form></div>
  

</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
    data(){
        return{

            email:'',
            password:'',
            firstname:'',
            lastname:'',
        }
    },methods:{
        create(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            .then(()=>{
                this.$router.replace({name:"loginhome"})
            })
        }
    }

}
</script>

<style>

</style>