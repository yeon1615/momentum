## API(Application Programming Interface)란?

<br/>

- 인간이 아닌! **프로그램들끼리 서로 소통하는 것을 도와주는 매개체**
- 데이터를 원하는 어플리케이션이 데이터를 보유한 어플리케이션과 원활하게 소통할 수 있도록 **통신방법을 정의**하고 허용된 프로그램에만 **접근성을 부여**하는 **서비스 계약**과 같음
- **클라이언트 - 데이터를 요청하는 어플리케이션** (ex. 날씨 앱)
- **서버 - 응답을 보내는 어플리케이션** (ex. 기상청의 날씨 데이터베이스)
- API문서에는 요청과 응답을 구성하는 매뉴얼이 들어있다

<br/><br/>

### ❓ Web API란?

<br/>

- 브라우저를 위해 만든 API
- 웹 서버와 웹 브라우저 간의 어플리케이션 처리 인터페이스
- 유저의 마이크 엑세스 요청, 카메라 접근권한 요청, 지역위치 접근권한 요청 등을 쉽게 이용할 수 있는 것도 전부 웹API에 해당한다

<br/>
<br/>

## Navigator

<br/>

- 브라우저에 대한 다양한 정보를 제공해주는 웹API
- geolocation 속성을 통해, 사용자의 위치를 탐색하는 Geolocation 객체를 반환
- 브라우저는 Geolocation API를 통해 위치정보에 접근하기 전에 항상 사용자의 동의를 받도록 한다
- `getCurrentPosition()` 메서드를 호출해 사용자의 현재 위치를 얻는다
- `navigator.geolocation.getCurrentPosition(성공시 실행될 함수, 에러발생시 실행될 함수)`
- 성공시 실행할 콜백함수, 즉 success함수는 GeolocationPosition객체를 매개변수로 받는다 (유저의 위치를 받는다)

<br/>
<br/>

## 사용자의 위치정보 받아오기

<br/>

- GeolocationPosition 객체의 `coords` 속성을 통해 위도(latitude)와 경도(longitude), 장치의 방향, 속도 등에 접근 가능
- 보통은 위·경도를 사용하므로success함수의 형태는 대부분 아래와 같다
  ```jsx
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // 원하는 수행
  }
  ```

<br/>
<br/>

## 날씨 API 리퀘스트 보내기

<br/>

- API call url
  `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=[{API key}](https://home.openweathermap.org/api_keys)` 의 파라미터에 원하는 정보를 전달해 url 만들기
- fetch 함수를 통해 자바스크립트로 url 얻어오기

```jsx
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
// 위도, 경도, api키를 변수로 전달
fetch(url);
```

<br/>

💡 `fetch(url,옵션객체)` 원격 API를 호출하는 함수. HTTP 요청 전송 기능을 자바스크립트에서 접근하고 조작할 수 있게 해주는 Web API

- **HTTP response 객체를 래핑한 Promise 객체를 반환**
- API호출 성공 시, Promise의 후속처리 메서드인 then을 사용해 resolve한 객체를 전달받을 수 있음
- 해당 객체는 HTTP응답을 나타내는 속성들을 가지고있는데, 그 중 `json()` 메서드를 통해 **HTTP응답 텍스트를 JSON형식으로 바꾼 Promise를 반환**한다

```jsx
// 위 이어서
fetch(url).then((response) => response.json());
```

- 원격 API에 있는 데이터를 단순히 가져오기만 하는 경우에는 GET방식으로 작동하고, fetch함수에 옵션 인자를 넣지 않는다

```jsx
fetch(url)
    .then((response) => response.json())
    .then((data) => 가져온 data를 이용해 원하는 기능 수행);
```

<br/>
<br/>
