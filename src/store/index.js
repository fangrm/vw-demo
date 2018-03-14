import Vue from 'vue';
import Vuex from 'vuex';

import cs from './CSStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        cs,
    },
});

export default store;
