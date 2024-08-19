<template>
  <div class="about">
    <h1>login</h1>
    <button @click="getFruits()">Fruity</button>
  </div>
</template>
<script>
  export default{
    methods:{
      getFruits(){
        this.$store.dispatch("getFruits")
    }
  }
}
</script>