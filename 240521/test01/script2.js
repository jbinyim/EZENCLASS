// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     for (let k = 0; k < arr.length; k++) {
//       for (let l = 0; l < arr.length; l++) {
//         for (let n = 0; n < arr.length; n++) {
//           console.log(arr[i] + arr[j] + arr[k] + arr[l] + arr[n]);
//         }
//       }
//     }
//   }
// }

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

let rowmax = 0;
let colummax = 0;
let nummax = 0;

// 각 행의 합 중에서 가장 큰 값
// 각 열의 합 중에서 가장 큰 값
// 좌,우측 대각선의 합

// 위 3개의 값중 가장 큰 값
