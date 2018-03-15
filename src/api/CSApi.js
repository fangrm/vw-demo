import {ajaxSend, ajaxSendPromise} from "./myAjax";

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
};

export default CSApi;
