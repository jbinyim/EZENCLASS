const addButton = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// const getLocal = () => {
//   let todos = [];
//   if (localStorage.getItem("todos") == null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
// };

const removeLocal = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const index = todos.indexOf(todo.children[0].innerText);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocal = () => {
  let todos = [];
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    const newDiv = document.createElement("div");
    newDiv.className = "todo";
    const newTodo = document.createElement("li");

    newTodo.innerText = todo;
    newTodo.className = "todo-content";

    const completBtn = document.createElement("button");
    completBtn.innerText = "완료";
    completBtn.className = "complete-button";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.className = "delete-button";

    newDiv.append(newTodo, completBtn, deleteBtn);
    todoList.appendChild(newDiv);
  });
};

const saveToLocal = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    const newDiv = document.createElement("div");
    newDiv.className = "todo";
    const newTodo = document.createElement("li");

    newTodo.innerText = todoInput.value;
    newTodo.className = "todo-content";

    const completBtn = document.createElement("button");
    completBtn.innerText = "완료";
    completBtn.className = "complete-button";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.className = "delete-button";

    newDiv.append(newTodo, completBtn, deleteBtn);
    todoList.appendChild(newDiv);

    saveToLocal(todoInput.value);
    todoInput.value = "";
  }
};

const mangaeTodo = (e) => {
  const whichButton = e.target.classList[0];
  if (whichButton === "complete-button") {
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle("commplete");
  } else if (whichButton === "delete-button") {
    const todo = e.target.parentElement;
    removeLocal(todo);
    todo.remove();
  }
};

document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener("submit", addTodo);
todoList.addEventListener("click", mangaeTodo);
// getLocal();
