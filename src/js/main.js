const req = new XMLHttpRequest();
req.open('get', 'https://api.alquran.cloud/v1/meta');
req.onload = function () {
    document.getElementById('onload').style.display = 'none';

    var data = JSON.parse(req.response);
    for(let surah of data.data.surahs.references) {
        document.getElementById('field').innerHTML += `
            <a href="surah.html?${surah.number}"> ${surah.name} </a>
        `;
    }
}
req.send();


setInterval(
    () => {

        if (document.body.clientHeight - 100 <= Math.round((window.scrollY + window.screen.height)) || (window.scrollY == 0)){
            document.getElementsByClassName('top')[0].style.display = 'none';
        }
        else {
            document.getElementsByClassName('top')[0].style.display = 'block';
        }
    },
    100
);

