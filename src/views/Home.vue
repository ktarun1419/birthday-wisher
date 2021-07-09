<template>
  <div class="home">
    <div class="logo"><img alt="Vue logo" src="../assets/logo.png"></div>
    <h2 class="openingText">Welcome to The Birthday-Company</h2>
    <div class="welcome">
      <h1>CANN'T REMINDES THE BIRTHDAYS OF YOUR NEAR ONES???</h1>
      <h3>Here is the right place where you can....</h3>
    </div>
    <div class="content">
      <h2>Save Data</h2>
      <p>Save the Birthdays of your near  ones</p>
      </div>
      <div class="content">
        <h2>Show Birthdays</h2>
        <p>Show the upcoming birthdays so you can prepare gifts on time </p>
      </div>
      <div class="content">
        <h2>Remindes You</h2>
        <p>Remindes you the Birthdays so you can wish them first</p>
      </div>
      <div class="content">
        <h2>Simple To Use</h2>
        <p>Very simple and UI easy to use and manage</p></div>


  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
.logo{
  text-align: center;
  align-content: center;
  height: 60%;
  widows: 80%;
 
}.openingText{
  background-color:black;
  color: white;
  padding: 4%;
  font-family: cursive;
  font-size: 200%;
  
  
  
}.content{
  text-align: center;
  background-color:tomato;
  color:black;
  padding: 3%;
  outline-width: 1%;
  outline-style: solid;
  outline-color: black;
  width: 30%;
  font-size: 120%;
  margin: 1%;
  height: 20%;
  
  display: inline-block;}
  .welcome{
    font-family: cursive;
    color: black;
  }

</style>
