## 유저의 입력, 제출 후 Input필드 비우기

<br/>

```jsx
//HTML에서 Form(toDoForm), Input(toDoInput)을 가져온 상태

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  // 인풋필드에 입력한 값을 비워준다
  paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
```

<br/>

❗ 헷갈리지 말 것

- `toDoInput.value` 를 비우는 것 =/= `newToDo` 를 비우는 것
- `newToDo` 라는 변수에는, 할당하던 시점의 `toDoInput.value` 의 값이 복사됨
- 복사 후 원래의 `toDoInput.value`으로 수행하는 행동은 `newToDo` 와 연관X

<br/><br/>

## createElement로 추가한 요소 삭제하기

`removeChild(삭제할 요소)`

<br/><br/>

## 유저가 input에 입력한 항목을 localStorage에 문자열로 저장 후, 다시 객체로 받아와 작업 수행하기(화면에 띄우기, 유지하기 등)

<br/>

1. 유저가 입력한 항목을 보관할 array 생성 `let toDos = [];`
2. 입력받은 값을 해당 array에 push `toDos.push(입력받은 값);`
3. JSON.stringify 메서드를 통해 문자열로 변환 (💥 localStorage에는 문자열만 넣을 수 있다)
4. localStorage에 문자열로 저장 `localStorage.setItem('todos', JSON.stringify(toDos));`
5. 저장된 항목 받아오기 `const saved = localStorage.getItem('todos');`
6. 받아온 문자열을 다시 array로(JS 객체로) 변환 `const parsed = JSON.parse(saved);`
7. localStorage가 비어있는 상태가 아니라면, localStorage에 들어있는 값(정확히는 해당 문자열 값을 js객체로 다시 변환한 값)을 1번의 기존 array에 재할당해 유지하기

   ```jsx
   if (saved !== null) {
     const parsed = JSON.parse(saved);
     toDos = parsed;
   }
   ```

   <br/>

💥 7번 과정을 생략할 경우💥

→ 어플리케이션이 실행 될 때마다 toDos 배열이 빈 배열로 초기화, 그 후 새로 입력한 값들만을 다시 빈 배열(toDos)에 푸싱하기 때문에 이전에 localStorage에 저장된 값은 잃어버리게 됨

<br/><br/>

## 데이터베이스에서 특정 값 삭제하기

<br/>

1. 데이터베이스에서 특정 값을 지정해 삭제하기 위해서는 각 항목에 **id를 부여**해야 함

   💡 랜덤한 값을 부여해야 할 때 (ex.랜덤한 아이디 생성) Date.now()를 쓰면 편리하다. 밀리세컨드 단위이므로 중복될 확률이 거의 없음

2. 즉! 우리가 받는 toDos를 단일데이터들의 배열이 아닌, 객체들이 들어있는 배열로 만들어야 한다!

   ```jsx
   ['공부하기', '잠자기'][ // ❌
     ({ text: '공부하기', id: 132135465 }, { text: '잠자기', id: 213758135 })
   ]; // ⭕
   ```

3. `filter()` 메서드를 통해 toDos배열에서 특정 id를 가지고 있는 객체를 제외한 **새로운 배열**을 만들고 **재할당**함

   ```jsx
   toDos = toDos.filter((item) => item.id !== parseInt(특정 아이템.id));

   // item.id는 number, 특정아이템.id는 string이므로 parseInt를 통해 데이터타입을 맞춰준다
   // != 를 통해 타입이 아닌 값만 부등비교 해도 됨..
   ```

4. 재할당한 toDos 배열을 다시 **localStorage에 저장** (교체해줌)

   ```jsx
   localStorage.setItem('todos', JSON.stringify(toDos));
   ```

   <br/>

💡 3번에서 두 id의 데이터타입이 다른 이유!

```jsx
const li = document.createElement('li');
const obj = { name: 'obj', id: Date.now() };
// 위의 Date.now() 값은 number
li.id = obj.id;
// DOM의 id는 문자열을 값으로 가짐
// console.log(typeof li.id);를 해보면 string이 출력된다
```

<br/><br/>

---

<br/><br/>

❗ 자바스크립트는 JSON포맷의 데이터를 간편하게 다룰 수 있도록 `JSON` 이라는 객체를 내장하고 있음! JSON 내장객체의 메서드를 통해 자바스크립트 객체와 JSON 문자열 간의 상호 변환을 수행할 수 있다.

<br/>

`JSON.stringify(JSON 문자열로 변환할 객체)`

- JavaScript 객체를 JSON **문자열로 변환**
- String, Number, Boolean 객체들은 연관된 primitive 값으로 변환된다
- undefined, 함수, 심볼은 변환될 때 생략되거나, 배열 안에 있을 경우에는 null로 변환된다

```jsx
JSON.stringify([1, 'false', false]);
// [1, 'false', false] 에서 '[1,"false",false]'로 변환
```

<br/>

`JSON.parse(객체로 변환할 JSON문자열)`

- JSON 문자열을 분석해 JavaScript 객체로 변환
- 자바스크립트가 이를 이해하고, 객체에 적용 가능한 프로퍼티나 메서드들을 사용할 수 있게 됨!

```jsx
const json = '{"result":true, "count":50}';
const obj = JSON.parse(json);

console.log(obj.count);
// 50 출력
```

<br/><br/>

---

<br/><br/>

## 💡 JSON(JavaScript Object Notation)이란?

<br/>

- 데이터를 저장하거나 전송할 때 사용되는 **경량의 데이터 교환 형식**
- 자바스크립트에서 **객체를 만들 때 사용하는 표현식**
- Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷 (mdn설명)
- 통신방법X 프로그래밍문법X **데이터 표현방식O**
- 자바스크립트 객체의 형식을 기반으로 만들어졌기 때문에 자바스크립트 문법과 유사하지만, **텍스트 형식일 뿐!**

<br/>

### 📝 JSON 문법

<br/>

1. “name” : “value” 형식의 쌍을 가진다 (💥 항상 **쌍따옴표**를 이용해야 함)
2. 객체, 배열 등의 표기 사용 가능
3. 일반 자바스크립트 객체처럼 원하는 만큼 중첩 가능
4. property만 담을 수 있다. method는 담을 수 없음!
5. number, string, boolean, null, object, array를 데이터타입으로 취할 수 있다
