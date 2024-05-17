const userWord = prompt("단어를 입력하세요");

let a = "";
const ans = (userWord) => {
  for (let i = 0; i < userWord.length; i++) {
    if (userWord.indexOf(userWord[i]) === i) {
      a += userWord[i];
    }
  }
  return a;
};
console.log(ans(userWord));
