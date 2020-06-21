function ajax(method, url, callback, data, flag) {
    var xhr = null;
    let flag = flag || "GET";
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = ActiveXObject('Microsoft.XMLHTTP');
    }
    method = method.toUpperCase;
    if (method === 'GET') {
        var timer = new Date().getTime();
        xhr.open('GET', url + '?' + data + '&timer' + timer, flag)
        xhr.send();
    } else if (method === 'POST') {
        xhr.open('POST', url, flag);
        xhr.sendRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data)
    }

    xhr.onreadystatechange = function () {
        if (xhr.readtState == 4) {
            if (xhr.status > 200 && xhr.status < 300 || xhr.status == 304) { ///304上次请求后页面未改变
                var res = JSON.parse(xhr.responseText);
                callback(res)
            }
        }
    }
}
































function ajax(method, url, callback, data, flag) {
    var xhr = null;
    var flag = flag || true//默认为异步
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    };
    method = method.toUpperCase;
    if (method == 'GET') {
        
        xhr.open('GET', url + '?' + data , flag);
        xhr.send();
    }else if(method == 'POST'){
        xhr.open('POST',url,flag)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechage = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                var res = JSON.parse(xhr.responseText)
                callback(res)
            }
        }
    }
}