<template>
    <div class="login-page">
        <div class="logo-wrapper">
            <img src="../assets/logo-black.png" alt="iH5" class="logo">
        </div>
        <div class="login-input">
            <div class="account">
                <span class="text">账号：</span>
                <input type="text" class="account-input" v-model="account">
            </div>
            <div class="password">
                <span class="text">密码：</span>
                <input type="password" class="password-input" v-model="password">
            </div>
            <button class="login-btn" @click="getUserLogin()">登录</button>
        </div>
    </div>
</template>

<script>
    import UserApi from '../api/userApi';
    import { mapActions } from 'vuex';
    import * as actionTypes from '../store/action-types/CSForSupport';

    export default {
        name: 'LoginPage',

        mounted() {

        },

        data () {
            return {
                account: '',
                password: '',
            }
        },

        methods: {
//            mapActions([
//                'getUserLogin',
//            ]),
            getUserLogin() {
                this.$store.dispatch(actionTypes.GET_LOGIN, {
                    username: this.account,
                    password: this.password,
                }).then(() => {
                    console.log('login - login page');
                });
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
