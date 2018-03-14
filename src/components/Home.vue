<template>
    <div class="home-page">
        <div class="name-wrapper">
            <span class="name">{{ name() }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',

        props: {
            loginInfo: {
                type: object || null,
                default: null,
            }
        },

        computed: {
            name() {
                return this.$store.state.cs.loginInfo.username;
            },
        },

        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
