import * as mutaTypes from './mutation-types/CSForSupport';
import * as actionTypes from './action-types/CSForSupport';
import UserApi from '../api/userApi';

const state = {
    loginInfo: {},
};

const mutations = {
    [mutaTypes.LOGIN_SUCCESS] (state, payload) {
        console.log(payload);
    },
    [mutaTypes.LOGIN_FAILED] (state, payload) {

    },
    [mutaTypes.GET_USERINFO] (state, payload) {
        if (payload.status_code === 200) {
            state.loginInfo = payload.data;
        } else {
            state.loginInfo = undefined;
        }
    },

};

const actions = {
    [actionTypes.GET_LOGIN] ({commit, state}, payload) {
        UserApi.getUserLogin(payload).then((res) => {
            commit(mutaTypes.LOGIN_SUCCESS, res);
        }).catch(() => {
            commit(mutaTypes.LOGIN_FAILED);
            console.log('login failed');
        });
    },
    [actionTypes.GET_USERINFO] ({commit, state}) {
        UserApi.getLoginInfo().then((res) => {
            commit(mutaTypes.GET_USERINFO, res);
        }).catch(() => {

        });
    }
};


export default {
    state,
    mutations,
    actions,
};
