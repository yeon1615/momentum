const API_KEY = 'b4a03bb7a3f83c89f664fbdffd7858e0';

function onGeoSuccess(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let lang = 'kr';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=${lang}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(
        '#weather div:last-child span:first-child'
      );
      const weather = document.querySelector('#weather div:last-child img');
      const temp = document.querySelector('#weather div:first-child span');
      city.innerText = data.name;
      weather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temp.innerText = `${Math.trunc(data.main.temp)}°C`;
    });
}
function onGeoError() {
  alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
