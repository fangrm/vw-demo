<template>
    <div class="ContactItem">
        <div class="content">
            <div class="avatar">
                <img src="###" alt="头像">
            </div>
            <div class="center">
                <span class="name"></span>
                <p class="latest-msg">
                    <span class="msg-from"></span>
                    <span class="msg-content"></span>
                </p>
            </div>
            <div class="right">
                <span class="time"></span>
                <span class="icon"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactItem',
        data () {
            return {
                contactList: [],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
