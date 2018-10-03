<template>
    <div>
        <h1>Enrregistrement des users</h1>
        <div class="row" v-for="registration in registrations " :key="registration.userId">
            <h3>{{registration.name}}</h3>
            <span @click="unregister(registration)">(unregister)</span>
            <div class="date">{{registration.date}}</div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters }  from  'vuex';
export default {
    methods: {
        unregister (registration){
            this.$store.commit({
                type: 'unregister',
                userId: registration.userId
            })

        }
    },
    computed: {
        ...mapGetters ({
            registrations:  'registrations',
            totalRegistrations: 'totalRegistrations'
        })
       
    }
    
}
</script>
