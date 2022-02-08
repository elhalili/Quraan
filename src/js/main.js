let http = new XMLHttpRequest();
http.open('get', 'https://api.alquran.cloud/v1/quran/quran-uthmani');
http.onload = function () {
    document.getElementById('onload').style.display = 'none';

    var data = JSON.parse(http.response);
    for(let surah of data.data.surahs) {
        document.getElementById('field').innerHTML += `
            <div> ${surah.name} </div>
        `;
    }
}
http.send();
