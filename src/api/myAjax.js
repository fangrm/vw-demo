import DomainName from './domainName';

const DomainNameForCS_1 = '//sso-test.ih5.cn/';
const DomainNameForCS_2 = '//ih5kefu.hiyime.com/';

function ajaxSend(method, url, sendData, callback) {
    let data = null;
    let xhr = new XMLHttpRequest();

    data = JSON.stringify(sendData);
    xhr.onload = function() {
        if (xhr.status > 300) {
            callback(null);
        } else if (xhr.responseText) {
            callback(JSON.parse(xhr.responseText));
        } else {
            callback(null);
        }
    };

    let sUrl = DomainName + url;

    xhr.open(method, sUrl);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    xhr.send(data);
}

function ajaxSendPromise(method, url, sendData, callback) {
    return new Promise((resolve, reject) => {
        let data = null;
        let xhr = new XMLHttpRequest();

        data = JSON.stringify(sendData);
        xhr.onload = function() {
            if (xhr.status > 300) {
                reject(null);
                callback? callback(null) : null;
            } else if (xhr.responseText) {
                resolve(JSON.parse(xhr.responseText));
                callback? callback(JSON.parse(xhr.responseText)) : null;
            } else {
                reject(null);
                callback? callback(null) : null;
            }
        };

        let sUrl = DomainName + url;

        xhr.open(method, sUrl);

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.send(data);
    });
}

function ajaxForCS_1(method, url, sendData, callback) {
    return new Promise((resolve, reject) => {
        let data = null;
        let xhr = new XMLHttpRequest();

        data = JSON.stringify(sendData);
        xhr.onload = function() {
            if (xhr.status > 300) {
                reject(null);
                callback? callback(null) : null;
            } else if (xhr.responseText) {
                resolve(JSON.parse(xhr.responseText));
                callback? callback(JSON.parse(xhr.responseText)) : null;
            } else {
                reject(null);
                callback? callback(null) : null;
            }
        };

        let sUrl = DomainNameForCS_1 + url;

        xhr.open(method, sUrl);

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.send(data);
    });
}

function ajaxForCS_2(method, url, sendData, callback) {
    return new Promise((resolve, reject) => {
        let data = null;
        let xhr = new XMLHttpRequest();

        data = JSON.stringify(sendData);
        xhr.onload = function() {
            if (xhr.status > 300) {
                reject(null);
                callback? callback(null) : null;
            } else if (xhr.responseText) {
                resolve(JSON.parse(xhr.responseText));
                callback? callback(JSON.parse(xhr.responseText)) : null;
            } else {
                reject(null);
                callback? callback(null) : null;
            }
        };

        let sUrl = DomainNameForCS_2 + url;

        xhr.open(method, sUrl);

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.send(data);
    });
}

export { ajaxSend, ajaxSendPromise, ajaxForCS_1, ajaxForCS_2 };
