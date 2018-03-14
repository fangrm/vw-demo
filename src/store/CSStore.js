import * as mutaTypes from './mutation-types/CSForSupport';
import * as actionTypes from './action-types/CSForSupport';
import UserApi from '../api/userApi';

const state = {
    loginInfo: {},
};

const mutations = {
    [mutaTypes.LOGIN_SUCCESS] (state, payload) {

    },

    [mutaTypes.LOGIN_FAILED] (state, payload) {

    },
};

const actions = {
    [actionTypes.GET_LOGIN] ({commit, state}, payload) {
        UserApi.getUserLogin(payload).then((res) => {
            commit(mutaTypes.LOGIN_SUCCESS);
        }).catch(() => {
            commit(mutaTypes.LOGIN_FAILED);
            console.log('login failed');
        });
    },
};


export default {
    state,
    mutations,
    actions,
};
