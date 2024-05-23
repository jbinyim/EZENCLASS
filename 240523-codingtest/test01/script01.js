const word = prompt("단어를 입력하세요");
const a = prompt("문자 하나를 입력하세요");

// let ans = [];
// let idx = 0;
// for (let i = 0; i < word.length; i++) {
//   ans += word[i];
//   if (word[i] === a) {
//     idx = i;
//   }
// }
// console.log((ans[idx - 1] = 1));

// 1. 사용자에게 문자열
// 2. 사용에게 특정 문자
// 3. 빈 변수 만들고
// 4. 사용자가 입력한 문자열의 문자를 하나씩 추출해서 특정 문자인이 아닌지 반복해서 검사
// 5. 검사완료 후 빈 변수를 생성한 다음
// 6. 빈변수에 만약 사용자가 문자열 가운데 사용자가 입력하 문자가 같으면 0을 대입
// 7. 만약 0이 아니라고 하면 증감연산자로 숫자를 증가시킨 후 빈 변수에 대입
// 8. 좌측을 기준으로 특정문자가 아닌 경우 무한으로 값이 증가
// 9. 위와 같은 행위를 반대측면 (*index 가 가장 큰 영역부터 다시 문자열 검사)
// 10. 수학객체에서 최소값을 찾아주는 min매서드를 활용해서 최종 결과값 도출

const solution = (word, a) => {
  let answer = [];
  let num = Number.MAX_SAFE_INTEGER;

  for (let w of word) {
    if (w === a) {
      num = 0;
      answer.push(num);
    } else {
      num++;
      answer.push(num);
    }
  }

  num = Number.MAX_SAFE_INTEGER;
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] === a) {
      num = 0;
    } else {
      num++;
      answer[i] = Math.min(answer[i], num);
    }
  }
  return answer;
};

console.log(solution(word, a));
