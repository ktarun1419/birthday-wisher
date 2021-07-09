<template>
  <div>
      <h1>Welcome to your account</h1>
      <h2>ADD A BIRTHDAY REMAINDER</h2>
      <form @submit.prevent="sub">
          <label>Name:</label>
          <input type="text" placeholder="enter name" v-model="uname">
          <label>Date</label>
          <input type="date" placeholder="enter date" v-model="dob">
          
          </form> 
          <div>
              <ul id="list">
                  <li v-for="user in info" :key="user.name">{{user.name+'  '+user.date}}</li>
                  
              </ul></div>
              <button v-on:click="save">Save</button>
              <button v-on:click="logout">Logut</button>
              <button v-on:click="viewdata">view data</button>
              <button v-on:click="birthday">View Birthdays</button>
              <h3>{{currentDate}}</h3>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
    data(){
        return{
            uname:'',
            dob:'',
            users:[{name:'',age:''}],
            user:{name:'',age:0,id:'content'},
            currentDate:'',
            info:[],
            starter:0

            
            
            

        }   

},methods:{logout(){
        
            firebase.auth().signOut()
            .then(()=>{
                this.$router.replace({name:"About"})
        
            })
        },save(users,uname,dob){
            var name=this.uname;
            var birthday=this.dob;
            var userId=firebase.auth().currentUser.uid;
            var database=firebase.database().ref('userdata/').child(userId);
            database.push().set({
                name,
                birthday
            })
            this.info=[]
        
            var userId=firebase.auth().currentUser.uid;
            var database=firebase.database().ref('userdata/').child(userId);
            database.get().then((snapshot)=>{
                //console.log(snapshot.val());//
                //console.log(snapshot.key)//
                var  obi=snapshot.val();
                var keys=Object.keys(obi);
                
                for (let i =0; i < keys.length; i++) {
                    const k = keys[i];
                    var dte=obi[k].birthday;
                    var nam=obi[k].name
                   var user={name:nam,date:dte}
                   
                   this.info.push(user)
                    
                }
            })
          
        
        },birthday(currentDate,info){
            var date=new Date()
            var today=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()
            
            console.log(today)
            for (let i = 0; i < this.info.length; i++) {
                
                var birthdate=this.info[i].date;
                var bdate=new Date(birthdate)
                var birth=bdate.getFullYear()+'-'+bdate.getMonth()+'-'+bdate.getDate()
                console.log(birth)
                var message="today is "+this.info[i].name+"'s birthday"
                if (birth==today) {
                    alert(message)
                    
                } 
        }}

},created(){
    var userId=firebase.auth().currentUser.uid;
            var database=firebase.database().ref('userdata/').child(userId);
            database.get().then((snapshot)=>{
                //console.log(snapshot.val());//
                //console.log(snapshot.key)//
                var  obi=snapshot.val();
                var keys=Object.keys(obi);
                
                for (let i =0; i < keys.length; i++) {
                    const k = keys[i];
                    var dte=obi[k].birthday;
                    var nam=obi[k].name
                   var user={name:nam,date:dte}
                   
                   this.info.push(user)
                    

                }})
            


},mounted(){
    var date=new Date()
            var today=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()
            
            console.log(today)
            for (let i = 0; i < this.info.length; i++) {
                
                var birthdate=this.info[i].date;
                var bdate=new Date(birthdate)
                var birth=bdate.getFullYear()+'-'+bdate.getMonth()+'-'+bdate.getDate()
                console.log(birth)
                var message="today is "+this.info[i].name+"'s birthday"
                if (birth==today) {
                    alert(message)
                    
                } 
}
}
}
 
</script>

<style>

</style>