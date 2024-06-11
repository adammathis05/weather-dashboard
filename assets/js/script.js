const APIKey = "3d408f1254b97eca15a0c154d37aa7ae";

function getApi() {
// fetch (api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key})
fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=3d408f1254b97eca15a0c154d37aa7ae')
    .then(function (response) {
        return response.json();
    
    })
    console.log(response);

}