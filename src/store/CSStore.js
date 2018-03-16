import * as mutaTypes from './mutation-types/CSForSupport';
import * as actionTypes from './action-types/CSForSupport';
//import * as UITypes from './mutation-types/CSForSupportUI';
import UserApi from '../api/userApi';
import CSApi from '../api/CSApi';

const state = {
    loginInfo: null,
    loginId: null,
    msgStore: {},
    historyStore: {},

    focusUser: null,

    loadingShow: false,
    loadingText: '',

    // UI state
    communicatePanelShow: false,
};

const mutations_ui = {

};

const mutations = {
    [mutaTypes.LOADING_SHOW] (state, payload) {
        state.loadingShow = true;
        state.loadingText = payload;
    },
    [mutaTypes.LOADING_HIDDEN] (state) {
        state.loadingShow = false;
        state.loadingText = '';
    },


    [mutaTypes.LOGIN_SUCCESS] (state, payload) {
        console.log(payload);
    },
    [mutaTypes.LOGIN_FAILED] (state, payload) {

    },
    [mutaTypes.GET_USERINFO] (state, payload) {
        if (payload.status_code === 200) {
            state.loginInfo = payload.data;
        } else {
            state.loginInfo = null;
        }
    },

    [mutaTypes.FOCUS_USER] (state, payload) {
        state.focusUser = payload;
    },

    [mutaTypes.GET_HISTORY_RES] (state, {userData, msgList}) {
        state.historyStore[userData.user_id] = msgList;
    },

    [mutaTypes.CHANGE_MSG_STORE] (state, {userData, msg}) {
        if (state.msgStore[userData.user_id] === undefined) {
            state.msgStore[userData.user_id] = [...state.historyStore[userData.user_id]];
        } else {
            state.msgStore[userData.user_id] = state.msgStore[userData.user_id].push(...msg);
        }
    },

    // ---------------------------
    [mutaTypes.CommunicatePanelShow] (state, {isShow}) {
        state.communicatePanelShow = isShow;
    },


};

const actions = {
    [actionTypes.GET_LOGIN] ({dispatch, commit, state}, payload) {
        UserApi.getUserLogin(payload).then((res) => {
            dispatch(actionTypes.GET_USERINFO);
        }).catch(() => {
            commit(mutaTypes.LOGIN_FAILED);
            console.log('login failed');
        });
    },
    [actionTypes.GET_USERINFO] ({commit, state}) {
        UserApi.getLoginInfo().then((res) => {
            commit(mutaTypes.LOGIN_SUCCESS, res);
        }).catch(() => {
            commit(mutaTypes.LOGIN_FAILED);
        });
    },

    [actionTypes.LOGIN_CS] ({commit, state}) {

            CSApi.getAllowKey().then((res) => {
                if(res && res.level === 'success'){
                    CSApi.getLoginId(res.data).then((res) => {
                        if(res && res.level === 'success'){
                            //satate.loginId = res.auth_key;
                        } else {
                            //alert('checkAuthKey API ERROR');
                            //resolve(false);
                        }
                    })
                } else {
                    //alert('getAllowKey API ERROR');
                    //resolve(false);
                }
            });

    },

    async [actionTypes.CLICK_CONTACT] ({dispatch, commit, state}, contactData) {
        // TODO: connectUser
        commit(mutaTypes.LOADING_SHOW, '正在连接用户...');

        // 加载历史消息记录
        // commit(mutaTypes.LOADING_SHOW, '正在加载过往消息记录...');
        // if (state.historyStore[contactData.user_id] === undefined) {
        //     await dispatch(actionTypes.GET_HISTORY, contactData)
        // }

        // 初始化消息队列
        // commit(mutaTypes.CHANGE_MSG_STORE, {contactData});
        // 控制对话面板出现
        commit(mutaTypes.CommunicatePanelShow, {
            isShow: true,
        });

        commit(mutaTypes.LOADING_HIDDEN);
    },

    [actionTypes.GET_HISTORY] ({commit, state}, contactData) {
        CSApi.getChatRecord(contactData).then((res) => {
            if (res.status_code === 200) {
                commit(mutaTypes.GET_HISTORY_RES, res.data);
            } else {
                commit(mutaTypes.GET_HISTORY_RES, undefined);
            }
        });
    },


};


export default {
    state,
    mutations,
    actions,
};
