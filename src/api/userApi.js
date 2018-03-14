import {ajaxSend, ajaxSendPromise} from "./myAjax";

const POST = 'POST';
const GET = 'GET';

const userApi = {
    getUserLogin(data) {
        console.log(data);
        return ajaxSendPromise(POST, 'app/user/login', {
            username: data.username,
            password: data.password,
        });
    },

    getLoginInfo() {
        return ajaxSendPromise(POST, 'app/user/logininfo');
    },
};

export default userApi;
