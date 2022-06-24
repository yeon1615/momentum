const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const toDoItem = document.createElement('span');
  toDoItem.innerText = newToDo.text;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '✖';
  toDoList.prepend(li);
  li.appendChild(toDoItem);
  li.appendChild(deleteBtn);
  function deleteToDo() {
    toDoList.removeChild(li);
    toDos = toDos.filter((item) => {
      return item.id !== parseInt(li.id);
    });
    saveToDos();
  }
  deleteBtn.addEventListener('click', deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = { text: newTodo, id: Date.now() };
  // 랜덤한 값을 부여해야 할 때 Date.now()를 사용하면 편리
  toDos.push(newTodoObj);
  saveToDos();
  paintToDo(newTodoObj);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// 투두리스트에 아무것도 없을 경우 savedToDos === null 일 것

// if (savedToDos) 라고만 써도 된다
// 괄호 안 표현식을 평가해 0, 빈 문자열, NaN, null, undefined이라면 거짓으로 판단
// savedToDos 안에 값이 없을 경우 자동으로 null, 즉 false로 평가되므로!
if (savedToDos !== null) {
  const parsedToDo = JSON.parse(savedToDos);
  //parsedToDo는 이제 array인 상태
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDo);
  //parsedToDo array에 들어있는 아이템(obj)을 순회하며 paintToDo 수행
}
