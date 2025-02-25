
const API_KEY = 'cd66a394f82624647382eb5340f34d24';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=31.749&lon=34.989&appid=${API_KEY}&units=metric`;


const inputU = document.getElementById('in')
const inputBtn = document.getElementById('btn')
const iconApi = document.getElementById('icon')
const textApi = document.getElementById('text')
const itemperatureApi = document.getElementById('temperature')
const cityApi = document.getElementById('city')
const dateApi = document.getElementById('date')


const  test  =  {
    "coord": {
    "lon": 34.9888,
    "lat": 31.7496
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "base": "stations",
    "main": {
    "temp": 16.57,
    "feels_like": 15.93,
    "temp_min": 16.43,
    "temp_max": 17.36,
    "pressure": 1015,
    "humidity": 63,
    "sea_level": 1015,
    "grnd_level": 972
    },
    "visibility": 10000,
    "wind": {
    "speed": 6.27,
    "deg": 251,
    "gust": 7.01
    },
    "clouds": {
    "all": 99
    },
    "dt": 1711098589,
    "sys": {
    "type": 2,
    "id": 2004982,
    "country": "IL",
    "sunrise": 1711078861,
    "sunset": 1711122756
    },
    "timezone": 7200,
    "id": 295432,
    "name": "Bet Shemesh",
    "cod": 200
    }

const inner = (valueApi) => {
    const temperature = valueApi.main.temp;
    console.log(temperature);
    itemperatureApi.innerHTML = temperature 
    // itemperatureApi.innerHTML = "Celsius"
    const text = valueApi.weather[0].description;
    console.log(text)                        
    textApi.innerHTML = text
    const icon = valueApi.weather[0].icon;
    const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`    
    iconApi.innerHTML = `<img src=${urlIcon}>`
    const city = valueApi.name
    cityApi.innerHTML = city                                   
    dateApi.innerHTML = "23/03/2024"                                   

}


const updateUrl = () => {

    const searchTrm = inputU.value;
    console.log(searchTrm);
    let newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTrm}&appid=${API_KEY}&units=metric`;
    console.log(newUrl);
    fetch(newUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        inner(data)
    });
}




inputBtn.addEventListener('click',updateUrl)








// fetch(API_URL)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// });







// const test = {"Search":[{"Title":"Crazy, Stupid, Love.","Year":"2011","imdbID":"tt1570728","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"},{"Title":"Love Actually","Year":"2003","imdbID":"tt0314331","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNThkNjgxNGQtOTIxMy00ZTFmLWIwMDItYzE5YzM3ZDMzNDE3XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_SX300.jpg"},{"Title":"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb","Year":"1964","imdbID":"tt0057012","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWMxYjZkOWUtM2FjMi00MmI1LThkNzQtNTM5Y2E2ZGQ2NGFhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"},{"Title":"Thor: Love and Thunder","Year":"2022","imdbID":"tt10648342","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"},{"Title":"Shakespeare in Love","Year":"1998","imdbID":"tt0138097","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"},{"Title":"Love & Other Drugs","Year":"2010","imdbID":"tt0758752","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg"},{"Title":"P.S. I Love You","Year":"2007","imdbID":"tt0431308","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"},{"Title":"I Love You, Man","Year":"2009","imdbID":"tt1155056","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg"},{"Title":"Love, Death & Robots","Year":"2019–","imdbID":"tt9561862","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"},{"Title":"Punch-Drunk Love","Year":"2002","imdbID":"tt0272338","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}],"totalResults":"22108","Response":"True"}
// test.Search.map(prodact =>{
//     console.log(prodact);
// } )
// console.log(test.Search);