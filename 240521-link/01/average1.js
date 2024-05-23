// 미션!! 3개의 값을 줄테니 평균을 구하세요

// 확장성이 있는 코드
// 재사용 = 재활용이 가능한 코드

const arr = [87, 70, 100];

let average = 0;

for (let i = 0; i < arr.length; i++) {
  average += arr[i];
}
average /= arr.length;
console.log(average);
