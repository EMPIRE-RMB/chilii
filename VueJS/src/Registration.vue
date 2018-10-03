<template>
    <div>
        <h3>Register here</h3>
        <hr>
        <div class="row" v-for="user in users" :key="user.id">
            <h4>{{user.name}}</h4>
            <button @click="registerUser(user)">Register</button>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        users () {
            return this.$store.getters.unregisteredUsers;
        }
    },
    methods: {
        registraterUser(user) {
            this.$store.commit('register', user.id);
        }
    }
}
</script>
