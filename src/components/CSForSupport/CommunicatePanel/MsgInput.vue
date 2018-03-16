<template>
    <div class="MsgInput">
        <div class="function-btns">

        </div>

        <textarea
            class='im-input'
            placeholder='请输入信息，并按 Enter 发送'
            :value="inputValue"
        >
        </textarea>
    </div>
</template>

<script>

    export default {
        name: 'MsgInput',

        components: {
//            'ContactItem': ContactItem,
        },

        data () {
            return {
                inputValue: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../style/CSForSupport/cs-communicate-panel";
</style>
