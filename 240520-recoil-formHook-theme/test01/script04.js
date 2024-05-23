const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// let count = 0;
// let b = 0;
// let a = 1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     count += 0;
//   } else if (arr[i] === a) {
//     count++;
//     if (arr[i - 1] === a) {
//       b++;
//     }
//   }
// }

// console.log(count + b);

const solution = (arr) => {
  let answer = 0;
  let cnt = 0;

  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
};
console.log(solution(arr));
