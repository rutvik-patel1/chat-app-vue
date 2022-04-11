/* eslint-disable */
<template>
  <div>
      <div class="chat-list">
         <ul>
             <div class="message" v-for="(chat,index) in chatList" :key="index">
                 <li>{{ chat.msg }}</li>
                 <span >{{ chat.time }}</span>
             </div>

         </ul>
      </div>
      <div class="input">
          <input type="text" class="msg-input" v-model="input" placeholder="type message...." autofocus>
          <button class="send-btn" @click="sendMsg">Send</button>
      </div>
  </div>
</template>

<script>

import {data , addData } from "../firebase/app"
export default {
      async created() {
          this.chatList = await data()
          console.log("in created",this.chatList)
      },
      data() {
          return {
              chatList: [],
              input:'',
          }
      },
      methods: {
         async sendMsg(){
              const D = new Date()
              const time = D.toLocaleString()
              const message = {
                  msg:this.input,
                  time:time
              }
              await addData(message)
              const results = await data()
              this.chatList = results.sort(function(a,b){

              return new Date(b.msg.time) - new Date(a.msg.time);
            });
              

              console.log("methods",this.chatList)
            //   this.chatList.push(message)
              this.input=''
          },
          
      },
      computed:{
          
      }

}
</script>

<style>
.chat-list{
    height:100%-60px;
    overflow: scroll;
}
.msg-input{
    padding:10px;
    margin:auto;
    border: none;
    background-color:#dbe3eb;
    border-radius:10px;
}
.chat-list>ul>.message{
     list-style-type: none;
}
.chat-list>ul>.message{
    padding: 5px;
    
    margin:5px;
}
.chat-list>ul>.message{
     margin:5px;
     padding:10px;
     background-color: cadetblue;
     color:aliceblue;
     text-align:left;
     display: table;
     border-radius:10px;
}
.chat-list>ul>.message>span{
    font-size:12px;
    padding: 0;
    margin-top: 3px;
}
.send-btn{
    border-radius:10px;
    padding:10px 20px;
    margin:10px;
    border: none;
    background-color: #42b983;
    color: #fff;
    font-size: 16px;

}

.input{
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;

}
</style>

