// const season = [];
// season[0] = "spring";
// season[1] = "summer";

// console.log(season);

// const fruits = new Array("사과", "복숭아", "포도");
// console.log(fruits);

// fruits[4] = "배";
// console.log(fruits);
// console.log(fruits[3]);

// // undefined : 아직까지 정의가 되지 않은 값
// // null : 유호하지 않은 상태 = NaN

// fruits[0] = "오렌지";
// console.log(fruits);

// console.log(fruits.length);

// // 배열의 전체 아이템 개수 : length
// // 배열의 인덱스는 반드시 0부터 시작
// // => 배열안에 가장 마지막 아이템의 인덱스 값 => arr.length - 1

// code를 작성해서 UI로 구현하고자하는 거의 대부분의값들은 => 복수
// 1개 이상의 이밎 혹은 동영상 들

// 배열을 사용하는 정말 중요한 이유 중 하나 => 반복문
// 일반 for문 / for of 문 / forEach

const collors = ["red", "green", "blue", "white", "black"];
// for (let i = 0; i < collors.length; i++) {
//   console.log(collors[i]);
// }

// collors.forEach((color) => {
//   console.log(color);
// });

// collors.forEach((color, index) => {
//   console.log(`colors[${index}] : ${color}`);
// });

collors.forEach((color, index, array) => {
  console.log(`[${array}][${index}] : ${color}`);
});
