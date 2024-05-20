const word = [5, "teacher", "time", "student", "beautfull", "good"];
// let count = [];
// word.forEach((item) => {
//   count.push(item.length);
// });
// console.log(count);
// // count.sort((a, b) => {
// //   return b - a;
// // });
// // console.log(count[0]);

// count.forEach((i) => {
//   let a = i;
//   console.log(a);
// });

const soulution = (arr) => {
  // js에서 사용가능한 가장 작은 정수값
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";
  for (let text of arr) {
    if (text.length > max) {
      max = text.length;
      answer = text;
    }
  }
  return answer;
};
console.log(soulution(word));
