const API_KEY = 'b4a03bb7a3f83c89f664fbdffd7858e0';

function onGeoSuccess(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let lang = 'kr';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=${lang}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:nth-child(2)');
      const temp = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp} ℃`;
    });
}
function onGeoError() {
  alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
