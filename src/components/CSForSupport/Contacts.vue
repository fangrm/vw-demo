<template>
    <div class="Contacts">
        <contact-item></contact-item>
    </div>
</template>

<script>
    import ContactItem from './ContactItem.vue';

    export default {
        name: 'CSForSupport',

        components: {
            'ContactItem': ContactItem,
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
