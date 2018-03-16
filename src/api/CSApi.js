import {ajaxSend, ajaxSendPromise, ajaxForCS_1, ajaxForCS_2} from "./myAjax";

const POST = 'POST';
const GET = 'GET';

const CSApi = {
    getChatRecord(contact) {
        return ajaxSendPromise(POST, 'api/cs/custom/get-chat-record', {
            v_user_id: 0,
            line_id: 0,
            limit: 100,
        });
    },

    getAllowKey() {
        return ajaxForCS_1(GET, 'app/ucenter/getAllowKey');
    },

    getLoginId(data) {
        return ajaxForCS_1(GET, 'api/auth/auth-key?auth_key=' + data);
    },

    loginCS(loginId) {
        return ajaxForCS_2(GET, 'api/auth/online?loginid=' + loginId);
    },

    getCustomOnline(clientId) {
        return ajaxForCS_2(POST, 'api/cs/custom-online', clientId);
    }
};

export default CSApi;
