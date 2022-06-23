## Randomness (무작위성) 부여하기

<br/>

`Math.random()`

- 0 ~ 1 사이의 랜덤한 값을 반환한다

```jsx
arry[Math.floor(Math.random() * array.length)];
// 해당 배열의 인덱스에 랜덤으로 접근할 수 있음
```

<br/><br/>

## Javascript를 통해 HTML element 생성하기

<br/>

`Document.createElement('태그이름')`

- 문자열로 지정한 태그의 html요소를 만들어 반환한다

```jsx
const img = document.createElement.("img");
img.src = "bg.jpg"; // src속성을 사용할 수 있게 됨
```

<br/>

➕ 참고

`Document.createAttribute('속성이름')` - 속성 노드 생성

`Document.createTextNode('text')` - 텍스트 노드 생성

<br/><br/>

## 부모 노드에 자식 노드 추가하기

<br/>

`Element.append()`

- 노드 객체(Node object) 혹은 문자열(DOMString)을 자식요소로 추가 가능
- 자식 노드 리스트 중 마지막 자식으로 배치한다
- 한번에 여러 노드, 문자열 추가 가능
- 값을 반환하지 않는다

```jsx
const parent = document.createElement('div');
const child = document.createElement('span');

parent.append(child); // <div><span></span></div>
parent.append(child, 'hello');
// <div><span></span>hello</div>
```

<br/>

`Node.appendChild()`

- 노드 객체만 자식요소로 추가 가능
- 한번에 하나의 노드만 추가 가능
- 추가된 노드 객체를 반환한다
- 노드를 복사하는 메서드가 아님! 이미 HTML 내에 존재한다면 이동시켜버림

```jsx
const parent = document.createElement('div');
const child = document.createElement('span');
parent.appendChild('string'); // 에러발생
parent.appendChild(child); // 로깅하면 <span>
```

<br/>

➕ 참고

`Element.prepend()`

- 자식 노드 중 맨 앞에 배치
- 노드객체와 DOMString 모두 추가 가능

<br/><br/>

---

<br/><br/>

### 🚫 Hard - coding ❌❌❌❌❌💩💩💩

- 변수를 사용하지 않고, 값을 직접 소스코드에 넣어서 사용하는 것
- 코드가 길어질 경우 해당 값만 보고 의미를 파악하기 어렵다
- 외부 변화에 대응이 어려워 유지보수가 어려워진다
- 재사용성이 현격히 떨어지므로 지양!!!
- 하드코딩을 하기보다는 상수를 활용하자
