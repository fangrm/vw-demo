<template>
    <div class="wrapper">
        <div class="logo-wrapper">
            <img src="../assets/logo-black.png" alt="iH5" class="logo">
        </div>
        <div class="login-input">
            <div class="account">
                <span class="text">账号：</span>
                <input type="text" class="account-input">
            </div>
            <div class="password">
                <span class="text">密码：</span>
                <input type="password" class="password-input">
            </div>
            <button class="login-btn">登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
