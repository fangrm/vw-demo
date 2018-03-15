<template>
    <div class="CommunicatePanel">
        <msg-content
            :msgList="msgList"
        ></msg-content>
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
                msgList: [
                    {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 1,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'c-v',
                        msgId: 2,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 3,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 4,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 5,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 6,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 7,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 8,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 9,
                    }, {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
                        msgId: 10,
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../style/CSForSupport/cs-for-support";
</style>
