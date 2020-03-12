new Vue({
    el: '#app',
    data: {
        username: "",
        password: "",
        showUser: "",
        showPass: ""
    },
    methods: {
        save(){
            this.showUser = "Username: " + this.username
            this.showPass = "Password: " + this.password
            this.username = ""
            this.password = ""
        }
    }
})