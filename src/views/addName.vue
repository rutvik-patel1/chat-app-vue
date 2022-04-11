<template>
  <div>

          <input type="text" v-model="name">
          <button @click="setName">Submit</button>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:''
        }
    },
    methods:{
        setName(){
            console.log("setname1")
            localStorage.setItem('uname',this.name)
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>