<template>
    <div class="MsgContent">
        <div class="msg-wrapper" v-for="(msg, index) in msgList" key="msg.msgId">
            <div class="msg v-c" v-if="msg.sendType === 'v-c'">
                <div class="text" v-if="msg.type === 'text'">
                    <img src="###" alt="用户头像" class="avatar">
                    <p class="content">
                        {{ msg.content }}
                    </p>
                </div>
                <div class="emoji" v-else-if="msg.type === 'emoji'">
                    <p class="content">
                        {{ msg.content }}
                    </p>
                    <img src="###" alt="" class="avatar">
                </div>
            </div>
            <div class="msg c-v" v-else-if="msg.sendType === 'c-v'">
                <div class="text" v-if="msg.type === 'text'">
                    <img src="###" alt="用户头像" class="avatar">
                    <p class="content">
                        {{ msg.content }}
                    </p>
                </div>
                <div class="emoji" v-else-if="msg.type === 'emoji'">
                    <p class="content">
                        {{ msg.content }}
                    </p>
                    <img src="###" alt="" class="avatar">
                </div>
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

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../style/CSForSupport/cs-for-support";
</style>
