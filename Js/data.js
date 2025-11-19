function getData(url, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/${url}`)
    request.send()

    request.onreadystatechange = function () {
        if (request.status === 200 && request.readyState === 4) {
            let data = request.response;
            let datas = JSON.parse(data)
            callback(datas)
        }
    }
}

