import DomainName from './domainName';

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

export { ajaxSend, ajaxSendPromise };
