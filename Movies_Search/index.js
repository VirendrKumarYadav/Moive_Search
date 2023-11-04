// pressed key
let data = document.querySelector('#search');
let keydowns = "";

data.addEventListener('keydown', (a) => {
    if (parseInt(a.keyCode) >= 65 && parseInt(a.keyCode) <= 90 || parseInt(a.keyCode) >= 97 && parseInt(a.keyCode) <= 122) {
        keydowns += a.key;
    }
});

// button
let searchBtn = document.querySelector('#search_btn');
searchBtn.addEventListener('click', function () {
    console.log(keydowns);
    fetchAPI(keydowns, 1);
    keydowns = '';
});

// fetch API
let body = document.querySelector('main .container .crousal_effect');
let bodyCont = document.querySelector('main .container ');
let posters = document.querySelector('.posters');
async function fetchAPI(searchName, pageNo) {
    let api_data = await fetch(`http://www.omdbapi.com/?apikey=390a6d30&s=${searchName}&page=${pageNo}`);
    let data = await api_data.json();
    console.log(data.Search);
    // data.map()
    console.log(body);
    // body.style.display = 'none';
    // bodyCont.style.height=0+'px';
    // bodyCont.style.width=0+'px';


    for (let index = 0; index < data.Search.length - 1; index++) {
        let div = document.createElement('div');
        div.classList.add('poster');
        let crtPoster = ` 
    <img src=${data.Search[index].Poster}
        alt="">
    <div class="title">
        <h1>${data.Search[index].Title}</h1>
        <p class="year">${data.Search[index].Year}</p>
        <p>This is oldest search moive</p>
</div>`;
        div.innerHTML = crtPoster;
        posters.appendChild(div);
    }



}
