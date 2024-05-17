const userWord = prompt("단어를 입력하세요");

const check = (word) => {
  let ans;
  const count = Math.floor(word.length / 2);
  if (word.length % 2 == 0) {
    ans = word[count] + word[count + 1];
  } else {
    ans = word[count];
  }
  return ans;
};

console.log(check(userWord));
