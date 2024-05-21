const arr = [87, 89, 92, 100, 76];

// let maxnum = [];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (count <= arr[i]) {
//     count = arr[i];
//     maxnum.push(count);
//   }
// }
// console.log(arr.sort());

const soulution = (arr) => {
  const n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
};

console.log(soulution(arr));
