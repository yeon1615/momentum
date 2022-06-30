const clock = document.getElementById('clock');

function getClock() {
  //   const date = new Date();
  //   const hours = String(date.getHours()).padStart(2, '0');
  //   const minutes = String(date.getMinutes()).padStart(2, '0');
  //   const seconds = String(date.getSeconds()).padStart(2, '0');
  //   clock.innerText = `${hours} : ${minutes} : ${seconds}`;
  clock.innerText = new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function showClock() {
  getClock();
  setInterval(getClock, 1000);
}

showClock();
