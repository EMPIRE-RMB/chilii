<template>
    <div id="app">
        <button class="button" @click="increment">Increment +1</button><br>
        <button class="decrement" @click="decrement">DECREMENT +5</button><br>
        <span>{{ conteur }}</span>
    </div>
</template>
<script>
import { mapGetters }  from  'vuex';
export default {
    name: 'counter',    
    methods: {
        increment () {
            return this.$store.commit('INCREMENT', 1)
        },
        decrement () {
            return this.$store.commit('DECREMENT', 5)
        }
    },
    computed: {
        ...mapGetters ({
            conteur: 'COUNT'
        })
    }
}
</script>

