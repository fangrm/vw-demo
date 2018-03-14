<template>
    <div class="CommunicatePanel">
        <msg-content></msg-content>
        <msg-input></msg-input>
    </div>
</template>

<script>
    import MsgContent from './MsgContent.vue';
    import MsgInput from './MsgInput.vue';

    export default {
        name: 'CommunicatePanel',

        components: {
            'MsgContent': MsgContent,
            'MsgInput': MsgInput,
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
    @import "../../../style/CSForSupport/cs-for-support";
</style>
