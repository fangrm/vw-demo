import {ajaxSend, ajaxSendPromise, ajaxForCS_1, ajaxForCS_2} from "./myAjax";

const POST = 'POST';
const GET = 'GET';
const DomainNameForCS_1 = '//sso-test.ih5.cn/';
const DomainNameForCS_2 = '//ih5kefu.hiyime.com/';

let _loginId;

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



    getLoginId() {
        return new Promise((resolve, reject) => {
            if (_loginId) {
                resolve(_loginId);
                return _loginId;
            } else {
                getAllowKey().then((res) => {
                    if (res && res.level === 'success'){
                        checkAuthKey(res.data).then((res)=>{
                            if(res && res.level === 'success'){
                                _loginId = res.auth_key;
                                resolve(_loginId);
                                return _loginId;
                            } else {
                                //alert('checkAuthKey API ERROR');
                                resolve(false);
                            }
                        })
                    } else {
                        //alert('getAllowKey API ERROR');
                        resolve(false);
                    }
                });
            }
        });
    },



    getOnline() {},
};

export default userApi;
