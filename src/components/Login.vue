<template>
    <section class="login-page">
        <section id="login-container">
            <div>
                <h1>Welcome to postIt!</h1>
            </div>
            <div>
                <h4>
                    <a href="#">Create an Account</a>
                </h4>
            </div>
            <div>
                <h4>Or</h4>
            </div>
            <div>
                <h3>Please Log In</h3>
                    <div>
                        <input type="text" name="email" v-model="input.username" placeholder="Email">
                    </div>
                    <div>
                        <input type="password" name="password" v-model="input.password" placeholder="Password">
                    </div>
                        <button class="button" name="login" @click="login()">Log In</button>
                    <div>
                        <small>
                            <a href="#">Forgot password?</a>
                        </small>
                    </div>
            </div>
        </section>
    </section>
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                }
            }
        }, 
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    this.$router.push({path: '/index'});
                    this.input.username = "";
                    this.input.password = "";
                } else {
                    console.log("Wrong username or password!");
                    this.$router.replace({path: '/'});
                }
            }
        },
    }
</script>

<style scoped>

.login-page {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

#login-container {
    background-image: url(../assets/logo.png);
    background-size: 20% auto;
    background-repeat: no-repeat;
    background-position: 15px 15px;
    min-width: 25%;
    padding: 45px 45px;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    text-align: center;
}

#login-container input {
    padding: 8px 16px;
    margin: 4px 0;
}


</style>