<template>
    <div class="Contacts">
        <contact-item
            v-for="(data, index) in contactList"
            :key="data.name"
            :contactData="data"
        ></contact-item>

        <ul class="menu">
            <li class="menu-item">删除会话</li>
        </ul>
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
                contactList: [
                    {
                        name: 1,
                    }, {
                        name: 2,
                    }, {
                        name: 3,
                    }, {
                        name: 4,
                    }, {
                        name: 5,
                    }, {
                        name: 6,
                    }, {
                        name: 7,
                    }, {
                        name: 8,
                    }, {
                        name: 9,
                    }, {
                        name: 10,
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/CSForSupport/cs-for-support";
</style>
