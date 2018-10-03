<template>
    <div>
        <h3>Register here</h3>
        <hr>
        <Table border ref="selection" :columns="myTableColums" :data="mydata"></Table>
        <div class="row" v-for="user in users" :key="user.id">
            <button @click="registerUser(user)">Register</button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
       return {
           myTableColums: [
               {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
           ],
           mydata: [{
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
       }
   },
    computed: {
        users () {
            return this.$store.getters.unregisteredUsers;
        }
    },
    methods: {
        registraterUser(user) {
            this.$store.commit('register', user.id);
      }
    },
    
}
</script>