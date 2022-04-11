<template>
  <h3>@{{ name }}</h3>
  <room-card :id="roomId" @generateRoom="generateRoom"></room-card>
</template>

<script>

import RoomCard from "../components/RoomCard.vue"
export default {
    components:{
       RoomCard
    },
    data() {
        return {
            roomId: "000000",
            
        }
    },
    methods:{
        generateRoom(){
            return this.roomId = Math.floor(111111 + Math.random()*888888)
        },
        
    },
    computed:{
name(){
          return localStorage.getItem('uname')   
        }
    }
}
</script>

<style>

</style>