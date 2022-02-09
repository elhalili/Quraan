let number = window.location.search.split("?")[1];
let test = document.getElementById('test');
var data;
const req = new XMLHttpRequest();
req.open('get', `https://api.alquran.cloud/v1/surah/${number}`);
req.onload = function () {
    data = JSON.parse(req.response);
    for(let ayah of data.data.ayahs) {
        test.innerHTML += ` ${ayah.text} `;
    }
}

req.send()
