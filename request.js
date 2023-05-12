function Post(url, params, fn) {
    console.log(params);
    const Http = new XMLHttpRequest();
    Http.open("POST", url);
    //Http.setRequestHeader('content-type', 'application/json');
    //Http.send(JSON.stringify(param));
    Http.send(params);
    Http.onreadystatechange = (e) => {
        if (e.target.readyState == 4 && e.target.status == 200) {
            // 请求成功，回调
            fn(Http.responseText);
        }
    }
}