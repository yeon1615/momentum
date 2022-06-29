const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('.greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  // 함수를 호출하는 위치에 따라 유저 정보는 다른곳에서 출발(user의 입력)
}

function paintGreetings(savedUsername) {
  greeting.innerText = `Have a good day ${savedUsername}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  // 함수를 호출하는 위치에 따라 유저 정보는 다른곳에서 출발(local storage내의 value)
  // 페이지를 새로고침해도 savedUsername !== null이므로 form이 보이지 않음
}
