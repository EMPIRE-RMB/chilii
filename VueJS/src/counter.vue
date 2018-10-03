<template>
<div class="counter">
   {{increment}}
  
   <div class="counter_button" @click="decrement">decrement</div>
   <button @click="increment">increment</button>

</div>

</template>

<script>
import {  mapGetters }  from 'vuex'
  export default {
      data () {
          return {
              count: 0
          }
      },
      computed: {
        ...mapGetters ({
          increment: 'increment',
          decrement: 'decrement'
      })
      }
      
  }
</script>