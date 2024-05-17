const userWord = prompt("문자를 입력하세요");

const change = (word) => {
  let answer = "";
  for (let b of word) {
    if (b === b.toLowerCase()) {
      answer += b.toUpperCase();
    } else {
      answer += b.toLowerCase();
    }
  }
  return answer;
};

console.log(change(userWord));
