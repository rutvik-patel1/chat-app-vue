<template>
  <header>
      <h1>
          Chat App
      </h1>
      
      <router-link to="/">Home</router-link>
      <router-link to="chatroom">Chat Room</router-link> 
    
  </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
 
header{
     background-color: #42b983;
     margin:2px;
     padding:2px;
     margin-bottom:20px;
 }

 h1{
     margin-top: 8px;
     color:#ffffff;
     margin-bottom:20px;
 }

 a{
     list-style: none;
     color:#ffffff;
     font-weight: bold;
     margin:10px;
 }

</style>>