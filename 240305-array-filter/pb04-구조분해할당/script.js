// React => 구조 분해 할당!!

// const fruits = ["사과", "복숭아"];
// const apple = fruits[0];
// const peach = fruits[1];

// const [apple, peach] = fruits;

// console.log(apple, peach);

// const [teacher, ...students] = ["Park", "Kim", "Choi", "Lee"];
// console.log(teacher, students);

// const member = {
//   name: "Kim",
//   age: "25",
// };

// const { name: username, age } = member;
// console.log(username, age);

// 객체의 구조분해할당 시, 반드시 유의사항
// 구조분해할당 값을 전달받을 변수이름 = 객체의 key명 동일

const student = {
  name: "슛돌이",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(history, f2);
