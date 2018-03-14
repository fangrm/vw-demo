import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '../components/LoginPage.vue'
import CSForSupport from '../components/CSForSupport/index.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CSForSupport',
            component: CSForSupport,
        }, {
            path: '/cs-for-support',
            name: 'CSForSupport',
            component: CSForSupport,
        }
    ]
})
