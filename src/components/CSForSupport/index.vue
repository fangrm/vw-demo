<template>
    <div class="wrapper">
        <div class="main">
            <contacts></contacts>
        </div>
        <div class="loading-layer">
            <img src="../../assets/loading.png" alt="正在加载">
            <span class="loading-text">loading</span>
        </div>
    </div>
</template>

<script>
    import Contacts from './Contacts.vue';

    export default {
        name: 'CSForSupport',

        components: {
            'Contacts': Contacts,
        },

        data () {
            return {
                contactList: [],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
