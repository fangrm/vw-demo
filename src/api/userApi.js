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
        ajaxSendPromise(POST, 'app/user/getIdcard').then((res) => {
            if (res.status_code === 200) {

            }
        }).catch(() => {

        });
    },
};

export default userApi;
