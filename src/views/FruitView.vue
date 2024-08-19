<template>
    <div class="about">
      <h2>Fruit shop</h2>
        <div>
            <hr>
            <section v-for="fruit in $store.state.fruits" :key="fruit">
                <br>
                {{ fruit.id }}
                {{ fruit.fruit_name }}
                {{ fruit.weight }}
                R{{ fruit.amount }}
                <br><br>
                <button @click="addToCart(fruit.id)" v-if="$cookies.get('token')">Purchase {{ fruit.fruit_name }}/s</button>
                <hr>
            </section>
        </div>
    </div>
  </template>
  <script>
    export default{
      methods:{
        getFruits(){
            this.$store.dispatch('getFruits')
        },
        addToCart(id_fruit){
            this.$store.dispatch('addToCart',id_fruit)
        }
    },
    mounted() {
        this.getFruits()
    },
  }
  </script>