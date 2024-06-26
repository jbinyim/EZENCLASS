const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

// let anarr = [];
// for (let i = 0; i < arr.length; i++) {
//   anarr = arr[i];

//   for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
//     // if (anarr > arr[j])
//   }
// }

const solution = (arr) => {
  const n = arr.length;
  let answer = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 행과 열 총 25개의 값 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
};

console.log(solution(arr));
