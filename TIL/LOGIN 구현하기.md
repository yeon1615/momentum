## Form에 입력한 입력값 받아오기

<br/>

- input에 입력한 내용에 접근하기 위한 속성 `value`

```jsx
const loginInput = document.querySelector('input');
loginInput.value; // 로 해당 인풋의 입력값에 접근할 수 있다
```

✔ 자바스크립트로 구현하기 전에, HTML이나 CSS가 이미 지원하는 기능이라면 이를 이용하는게 좋다. (ex. css의 animation, html의 required 속성 등)

<br/><br/>

## Form Submission

<br/>

✔ 항상 유저가 입력하는 값의 유효성을 확인하는 습관을 기르자 💥 유저를 절대 믿지마. . .🤣

✔ 유저가 input에 내용을 입력했을 경우에만 버튼이 눌리게, input의 유효성 검사하기

<aside>
💡 input의 유효성 검사를 작동시키기 위해서는 **해당 input이 form 안에 위치**해야 한다

</aside>

<br/>

✅ form 요소에서 submit 이벤트의 발생

- type=”submit”인 input을 클릭
- input에서 엔터를 눌렀을 때, form 안에 또다른 input이 존재하지 않을 경우
- form 안에 있는 button(type=”submit”)을 클릭

→ form submit의 기본동작인 브라우저 새로고침 발생

→ 자바스크립트로 submit button에 대한 click이벤트를 감지할 필요가 없다!

<br/>

❓ form을 제출하는 순간 발생하는 새로고침을 막고 유저의 정보를 저장하게 하려면?

<br/><br/>

## Form Submit 이벤트 방지하기

<br/>

- EventListener 함수에게 첫번째 인자 자리를 주면, 해당 인자에는 **방금 벌어진 event에 대한 정보를 담은 객체**가 채워진다

→ 자바스크립트가 우리에게 알려주는 것!

```jsx
// 예문 1
const loginInput = loginForm.querySelector('input');
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}
loginForm.addEventListener('submit', onLoginSubmit);

// SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form.login-form, currentTarget: form.login-form, …} 방금 실행된 이벤트의 정보 출력
```

<br/><br/>

## Event.preventDefault() 메서드

<br/>

- 해당 이벤트의 기본동작이 발생되지 않도록 막아준다
- 기본동작 - 해당 function에 대해 브라우저(user agent)가 기본적으로 수행하는 동작
- eventListener함수(addEventListener함수의 인자로 들어가는 함수)의 첫 번째 인자(방금 발생한 이벤트)에 속해있는 메서드! 😂

<aside>

<br/>
💡 예문 1에서 onLoginSubmit 함수의 첫번째 인자인 event에는 submit 이벤트의 정보가 들어있을 것이고, 해당 이벤트에 대한 preventDefault 메서드를 통해 새로고침이라는 기본동작을 방지하는 것!

</aside>

<br/><br/>

---

<br/><br/>

## 유저의 submit 후 form 없애기

<br/>

1. HTML 요소 자체를 삭제
2. CSS를 이용해 숨기기

```jsx
/** CSS 파일에서 .hidden { display: none; } 로 설정 후*/

사라지길 원하는 element.classList.add(hidden);
```

💥 visibility: hidden과 display:none 의 차이

→ 전자는 공간을 그대로 유지, 후자는 공간까지 사라짐

<br/>

✔코드 내에서 같은 raw value가 두 번 이상 반복될 경우 변수에 할당하자!

✔ 관습적으로, string만을 값으로 저장하는 변수는 대문자로 표기한다

→ 실수를 만들고 싶지 않은 string이라는 사실을 상기하기에 좋음!

```jsx
const HIDDEN_CLASSNAME = 'hidden';
HTMLelement.clastList.add(HIDDEN_CLASSNAME);
```

<br/>

✔ 같은 행동을 수행하는 코드가 여러번 반복된다면 함수로 만들자

<br/><br/>

---

<br/><br/>

## 전달받은 Value 기억하기

<br/>

- localStorage API 이용
- 저장된 항목은 개발자 툴의 storage 탭에서 확인 가능

<br/>

`localStorage.setItem(keyName, keyValue)` 원하는 값 저장

`localStorae.getItem(keyName)` 원하는 값 호출, 해당 키가 **비어있다면 null 을 반환**한다

`localStorage.removeItem(keyName)` 저장된 값 삭제

`localStorage.clear()` 전부 삭제

<br/><br/>

---
