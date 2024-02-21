// 1. 입력하는 텍스트를 불러와야한다
// 2. 등록버튼을 불러와야한다
// 3. 리스트를 불러와야한다?
// 4. 텍스트를 입력후 버튼을 누르면 밑에 입력한 텍스트가 나와야한다.

const input = document.querySelector("#todo");
const btn = document.querySelector("form");
const result = document.querySelector("ul");

// const textStyle = () => {
//   result.innerText = text.value;
// };

// btn.onclick = (e) => {
//   e.preventDefault();
//   textStyle.style = `<li> ${textStyle()} </li>`;
// };

// 1. 사용자가 입력하는 값을 찾아오기 위해 입력창 정의
// 2. 사용자가 클릭할 버튼을 정의
// 3. 버튼을 클릭했을때 이벤트에 대한 기능 정의
// 4. li태그 삽입 => ul 태그자식 요쇼
// 5.사용자가 입력한 값을 출력할 공간에 대한 정의

const formFnc = (e) => {
  e.preventDefault();
  if (input.value != "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    result.appendChild(li);
    input.value = "";
  }
};

btn.onsubmit = formFnc;
