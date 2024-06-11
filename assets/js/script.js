const APIKey = "3d408f1254b97eca15a0c154d37aa7ae";

function getApi(city) {
    const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKey}&q=${city}&units=imperial`;

    fetch(apiUrlWeather).then(response => response.json()).then(data => {
        console.log(data); 
        const {lat,lon}=data.coord;
        renderWeather(data);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3d408f1254b97eca15a0c154d37aa7ae`)
        .then(function (response) {
            console.log(response);
            return response.json();

        }).then(data => {
            console.log(data);
            renderForecast(data);
        })
    })
}

function renderWeather(data) {
    document.getElementById("cityName").textContent= data.name;
    document.getElementById("date").textContent= dayjs.unix(data.dt).format("MM/DD/YYYY");
    document.getElementById("temp").textContent= data.main.temp+"F";
    document.getElementById("hum").textContent= data.main.humidity+"%";
    document.getElementById("wind").textContent= data.wind.speed+"mph";
    const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById("icon").src=iconUrl;

}

function renderForecast(data) {
    const forecastEl = document.getElementById("forecast")
    for (let i=3; i < data.list.length; i+=8) {
        const card = document.createElement("div");
        const dateEl = document.createElement("h3");
        const iconEl = document.createElement("img");
        const tempEl = document.createElement("p");
        const humEl = document.createElement("p");
        const windEl = document.createElement("p");
        dateEl.textContent = dayjs.unix(data.list[i].dt).format("MM/DD/YYYY");
        iconEl.src = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
        tempEl.textContent = data.list[i].main.temp;
        humEl.textContent = data.list[i].main.humidity;
        windEl.textContent = data.list[i].wind.speed;
        // card.append 


        //append cards to div on line 28
    }

}

function handleSearchSubmit() {
    const searchInput = document.querySelector("input");
    const city = searchInput.value;
    if (!city)
        return;
    getApi(city)
    searchInput.value = "";
}






document.getElementById("searchBTN").addEventListener("click", handleSearchSubmit)