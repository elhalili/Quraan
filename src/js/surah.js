let number = window.location.search.split("?")[1];
const surahText = document.getElementsByClassName('surah-text')[0];
const surahName = document.getElementsByTagName('H1')[0];
const surahAyahNumber = document.getElementsByClassName('info-surah-number')[0];
const surahPlace = document.getElementsByClassName('info-surah-place')[0];

var data;

const req = new XMLHttpRequest();
req.open('get', `https://api.alquran.cloud/v1/surah/${number}`);
req.onload = function () {
    data = JSON.parse(req.response).data;
    
    document.getElementById('onload').style.display = 'none';
    surahName.innerHTML = `${data.name}`
    document.title = `${data.name}`;
    surahAyahNumber.innerHTML = `عدد الايات : ${data.numberOfAyahs}`;
    surahPlace.innerHTML = `مكان النزول : ${data.revelationType}`;

    for(let ayah of data.ayahs) {
        surahText.innerHTML += `${ayah.text}<span class="number">${ayah.numberInSurah}</span>`;
    }
}
req.send();

setInterval(
    () => {
        if (document.body.clientHeight == Math.round((window.scrollY + window.screen.height))){
            document.getElementsByClassName('top')[0].style.display = 'none';
        }
        else {
            document.getElementsByClassName('top')[0].style.display = 'block';
        }
    },
    200
);
