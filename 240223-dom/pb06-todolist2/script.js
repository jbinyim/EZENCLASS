// 사용자가 제목,저자를 입력후 저장하기를 누른다
// 버튼이 눌리면 제목과 저자를 불러와 밑에 출력한다
// 목록에 출력된것중에 삭제 버튼을 누르면 삭제된다

const submit = document.querySelector("#container input[type='submit']");
const list = document.querySelector("#bookList");
const reset = document.querySelector("#container input[type='reset']");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = "삭제";
  li.innerText = `${title} - ${author}`;
  list.appendChild(li);
  li.appendChild(span);
  const buttons = document.querySelectorAll("span");
  for (let btn of buttons) {
    btn.addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  title.value = "";
  author.value = "";
});

// 제목 & 저자 값을 찾아와야한다
// 이벤트가 작동하도록 해주는 저장하기 버튼 정의
// 찾아온 값을 출력해주도록 도와주는 이벤트 함수
// 출력할 공간에 대한 정의
// 삭제하기버튼 정의
// 삭제하기 버튼이 복수의 갯수로 생성 => 반복문을 사용해서 클릭한 삭제버튼 찾아오기 위해서 => this (클래스 함수 vs 화살표 함수)
// 삭제하기 버튼 클릭시 목록사제 이벤트 함수

// const save = document.querySelector("form");
// const bookList = document.querySelector("#bookList");

// save.addEventListener("submit", (e) => {
//   const title = document.querySelector("#title");
//   const author = document.querySelector("#author");
//   e.preventDefault();
//   const li = document.createElement("li");
//   li.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;
//   bookList.appendChild(li);
//   title.value = "";
//   author.value = "";

//   const delButtons = document.querySelectorAll("span");
//   for (let delButton of delButtons) {
//     delButton.addEventListener("click", function () {
//       this.parentNode.parentNode.removeChild(this.parentNode);
//     });
//   }
// });
