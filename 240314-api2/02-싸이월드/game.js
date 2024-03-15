// wordgame
const search = document.querySelector(".word_text form");

const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  console.log(myword, word, lastword, firstword);

  if (lastword == firstword) {
    document.querySelector("#result").innerText = "정답";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다";
    document.querySelector("#myword").value = "";
  }
};

search.addEventListener("submit", gameStart);

// 비동기방식으로 Js 실행시키게 되었을 떄

// lotogame
const button = document.querySelector(".wrapper_loto_btn");
const result = document.querySelector(".game_loto_number");

const luckyNumber = {
  digutNum: 6,
  maxNumber: 45,
};
const lotoStart = () => {
  const { digutNum, maxNumber } = luckyNumber;
  let myNumber = new Set();
  console.log(myNumber);
  for (let i = 0; i < digutNum; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `재추첨하겠습니다`;
  }
};

button.addEventListener("click", lotoStart);
