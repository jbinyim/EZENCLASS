// for(초기값; 조건식; 증감문) {
// 실행문
// }

const students = ["park", "kim", "lee", "kang"];

// for (let i = 0; i < student.length; i++) {
//   document.write(`${student[i]}, `);
// }

// 배열.foreEach(function(배열안에 있는 각각의아이템) {
//   실행문
// })

// students.forEach(function (student) {
//   document.write(`${student}, `);
// });

// for문을 활용해서 구구단 출력하기

// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + "[구구단 " + a + "단]" + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(a + "X" + b + " = " + a * b);
//     document.write("<br>");
//   }
// }

//  중첩 for문을 활요해서 5행 5열 테이블
// let num = 1;
// let t = "<table border=1>";

// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//     num++;
//   }
//   t += "</tr>";
// }

// t += "</table>";
// document.write(t);

// for in => 객체 전용
// for of => 배열 전용

// const gitBook = {
//   title: "깃 & 깃허브",
//   pubDate: "2024-02-15",
//   pasges: 272,
//   finsished: true,
// };

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]}<br>`);
// }

// for (student of students) {
//   document.write(`${student}, `);
// }

// while(조건식 => 참) {
//   실행문
// }

// let stars = Number(prompt("별점을 매겨주세요"));
// while (stars > 0) {
//   document.write("★");
//   stars--;
// }

// do {
//   document.write("★");
//   stars--;
// } while (stars > 0);

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   } else if (i % 7 == 0 && i % 5 != 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   } else {
//     document.write("<p class='blue'>" + i + "</p>");
//   }
// }

// break 예시
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   } else {
//     document.write(i, "<br>");
//   }
// }

// continue 예시
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br>");
//   }
// }

// 사용자에게 숫자를 하나 전달받으세요
// 해당숫자가 소수인지 아닌지 식별한후 소수라면 화면에 "00숫자는 소수입니다"라고 출력해주세요
// 소수 : 1과 자기 자신으로만 나눠질수 있는 숫자
// 단락회로평가: 특정값이 논리형값 => true / false

// for (let i = 1; i < 10; i++) {
//   if (num % 2 === 1) {
//     document.write(`${num}은 소수입니다.`);
//     break;
//   } else {
//     document.write(`${num}은 소수가 아닙니다.`);
//   }
//
// const num = Number(prompt("숫자를 하나 입력하세요"));
// let isPrime;
// if (num === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }

// if (isPrime) {
//   document.write(`${num}은 소수입니다.`);
// } else {
//   document.write(`${num}은 소수가 아닙니다.`);
// }

// 웹브라우저 화면에 아래보이는 배열 아이템중 10이상 되는 숫자만 출력해주세요
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] >= 10) {
//     document.write(arr[i] + " ");
//   }
// }

//  사용자에게 1보다 큰 수를 하나 전달 받으세요
// 그리고 그 숫자안에 있는 짝수들만 더해서 웹 브라우저 화면에 출력해주세요

// 1. 사용자에게 1보다 큰 수를 하나 입력받는다
// 2. 그 사이의 짝수들을 구별한다?
// 3. 구별한 수를 다 더한다

const num = Number(prompt("1보다 큰 수 하나를 입력하세요"));
let sum = 0;

for (let i = 1; i <= num; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    sum += i;
    document.write(`${i} ----- ${sum} <br>`);
  }
}
