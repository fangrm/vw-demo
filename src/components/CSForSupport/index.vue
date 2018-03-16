<template>
    <div class="CSForSupport">
        <div class="main">
            <contacts></contacts>
            <communicate-panel></communicate-panel>
        </div>
        <div class="loading-layer">
            <img src="../../assets/loading.png" alt="正在加载">
            <span class="loading-text">loading</span>
        </div>
    </div>
</template>

<script>
    import Contacts from './Contacts.vue';
    import CommunicatePanel from './CommunicatePanel/CommunicatePanel.vue';

    export default {
        name: 'CSForSupport',

        components: {
            'Contacts': Contacts,
            'CommunicatePanel': CommunicatePanel,
        },

        data () {
            return {
                contactList: [],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/CSForSupport/cs-for-support';
</style>
