<template>
  <div class="card">
      <div class="title">Welcome to Chat App</div>
      <div v-if="!isLoading">
        <div class="room-no">
            <p>{{id}}</p>
        </div>
        <div class="btn" v-if="isGenerated">
            <button @click="joinRoom()" :style="isGenerated ? { 'background-color': 'red' }:{}">Lets Chat !!!</button>
        </div>
        <div class="btn" v-if="!isGenerated">
            <button @click="generateRoom" >{{isGenerated? "Lets Chat in room": "Generate Room ID" }}</button>
        </div>
      </div>
      <div v-else>
        <p>Please Wait...</p>
      </div>
      <div class="divider">OR</div>
      <form @submit.prevent="joinRoomFromID">
        <div class="room-input">
          <input type="number" min="000000" max="999999" v-model="roomNumber" class="input-group" required>
        </div>
        <div class="btn">
            <button type="submit" >Join Room</button>
        </div>
      </form>
  </div>
</template>

<script>
import { createRoom ,ifExists} from "../firebase/app"
export default {
     data() {
       return {
         isGenerated:false,
         roomNumber : '000000',
         isLoading : false
       }
     },
     props:['id'],
     methods: {
       async generateRoom(){
           
           this.isGenerated = !this.isGenerated
           this.$emit("generateRoom")
           
       },
       async joinRoom(){
           this.isLoading = true
           await createRoom(this.id)
           console.log("joined")
           this.isLoading = false
           this.$router.push("/chatroom/"+this.id)
       },
       async joinRoomFromID(){
            const res = await ifExists(this.roomNumber)
            if(!res){
              console.log("Generate room , the given room number not exist")
            }
            else{
            console.log("please wait")
            this.$router.push("/chatroom/"+this.roomNumber)
            
            }
       }



     }
    
}
</script>

<style scoped>
.room-no{
  margin: auto;
  max-width: 150px;
}
.btn{
  padding:10px 20px;
}
.btn > button{
  padding:10px 20px;
  border: none;
  border-radius:8px;
  background-color: rgb(41, 86, 233);
  font-size: 14px;
  font-weight: 400;
  color: #edeff1;
}
.btn > button:hover{
  background-color: rgb(31, 69, 196);
  font-weight: 500;
}
.red{
  background-color: red;
}
.room-no p {
  color:#770b23;
  font-size: 40px;
  letter-spacing: 3px;
}
.title{
  background: color #123456;
  color:#164472;
  font-size: 26px;
  font-weight: 600;
  margin:20px 0;
}
.card{
  margin: 10px auto;
  max-width: 500px;
  background-color:#edeff1;
  border-radius:10px;
  box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.49);
}
.input-group{
  padding: 10px;
  border: none;
  border-radius:8px;
  font-size: 20px;
}
</style>