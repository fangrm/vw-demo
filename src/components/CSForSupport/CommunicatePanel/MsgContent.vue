<template>
    <div class="MsgContent">
        <div class="msg-wrapper" v-for="(msg, index) in msgList">
            <div class="msg v-c" v-if="msg.sendType === 'v-c'">
                <p class="text" v-if="msg.type === 'text'">{{ msg.content }}</p>
                <p class="emoji" v-else-if="msg.type === 'emoji'">{{ msg.content }}</p>
                <img class="picture" v-else-if="msg.type === 'pic'" :src="msg.content" />
            </div>
            <div class="msg c-v" v-else-if="msg.sendType === 'c-v'">
                <p class="text" v-if="msg.type === 'text'">{{ msg.content }}</p>
                <p class="emoji" v-else-if="msg.type === 'emoji'">{{ msg.content }}</p>
                <img class="picture" v-else-if="msg.type === 'pic'" :src="msg.content" />
            </div>
            <div class="system-msg" v-else-if="msg.sendType === 'system'">
                <p class="content">{{ msg.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'MsgContent',

        props: {
            msgList: {
                type: Array,
                default: [],
            }
        },

        components: {
//            'ContactItem': ContactItem,
        },

        data () {
            return {
                msgList: [
                    {
                        content: 1,
                        type: 'msg',
                        sendType: 'v-c',
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
