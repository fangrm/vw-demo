<template>
    <div class="ContactItem" @click="goToCommunicatePanel">
        <div class="avatar">
            <img src="../../assets/default-avatar.jpg" alt="头像">
        </div>
        <div class="center">
            <p class="name">{{ contactData.name }}</p>
            <p class="latest-msg">
                <!--<span class="msg-from"></span>-->
                <span class="msg-content">最新消息</span>
            </p>
        </div>
        <div class="right">
            <span class="time">18:20</span>
            <!--<span class="icon"></span>-->
        </div>
    </div>
</template>

<script>
    import * as actionType from '../../store/action-types/CSForSupport';

    export default {
        name: 'ContactItem',

        props: {
            contactData: {
                type: Object,
                required: true,
            },
        },

        data () {
            return {
                contactList: [],
            }
        },

        methods: {
            goToCommunicatePanel() {
                this.$store.dispatch(actionType.CLICK_CONTACT, this.contactData);
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/CSForSupport/cs-for-support';
</style>
