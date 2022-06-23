❗ 한 파일에 모든 코드를 적는 건 X, 구현하는 기능마다 세분화해 파일을 나눠서 관리하자

<br/><br/>

## Intervals

<br/>

- 반복적으로 ‘매번’ 일어나야 하는 행동을 설정하고 싶을 때 사용
- `setInterval(실행하고자 하는 함수, ms단위 호출간격)` 을 이용해 호출

<br/><br/>

## Timeout

<br/>

- 일정 시간이 흐른 뒤에 특정한 행동을 수행하고 싶을 때 사용
- `setTimeout(실행하고자 하는 함수, ms단위 기다릴 시간)` 을 이용해 호출

<br/><br/>

## 현재시간 나타내기

<br/>

- Date 빌트인객체를 이용, 인자를 전달하지 않으면 현재시간이 반환된다

```jsx
const now = new Date();
```

- Date의 인스턴스레벨 메서드를 이용해 현재 시간대를 받아올 수 있음!

```jsx
now.getHours();
now.getMinutes();
now.getSeconds();
```

<br/><br/>

## 💡 setInterval 메서드의 초기 지연 없애기

<br/>

- setInterval 메서드는 딜레이-콜백-딜레이-콜백 순으로 진행된다
- 콜백함수를 먼저 실행하도록 함수를 엮어주기

```jsx
function startInterval(callback, interval) {
  callback(); //콜백함수 먼저 실행
  return setInterval(callback, interval);
}
```

<br/><br/>

### ❓ 시계의 시간 표시를 15:8:7이 아닌 15:08:07 형식으로 바꾸고 싶다면?

<br/>

- 해당 string의 최소 문자 개수를 지정한다

<br/><br/>

## padStart()

<br/>

- String의 인스턴스레벨 메서드
- 현재 문자열의 좌측부터 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환한다
- `padStart(목표 문자열 길이, "채워넣을 문자열")`
- 우측부터 채우고 싶다면 `padEnd` 사용
- ‘문자열’ 에만 사용 가능!! 래퍼객체 String(변환할 값)을 이용해 문자열로 변환 혹은 toString() 메서드 이용

```jsx
const date = new Date();
const hours = date.getHours();
String(hours).padStart(2, '0');
// hours.toString().padStart(2, '0')
```

<br/><br/>

## 💡 .toLocaleTimeString() 을 이용하면 간단히 해결

<br/>

`toLocaleTimeString('en-GB')` AM/PM 없는 24시간 표현

`toLocaleTimeString('en-US')` AP/PM 포함 12시간 표현

`toLocaleTimeString('ko-KR')` 오전/오후 포함 12시간 표현

- 인자를 주지 않을 경우 디폴트 설정이 반영된다
