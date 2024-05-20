const userWord = prompt("문자를 입력하세요");

const check = (userWord) => {
  let w = 0;
  for (let b of userWord) {
    if (b === b.toUpperCase()) {
      w++;
    }
  }
  return w;
};

console.log(check(userWord));
