// Js Class : 반복벅인 객체를 생성하고자 할 때 비효율성 감소!!

// const studentA = {
//   name: "짱구",
//   grade: "A+",
//   age: "22",
//   study() {
//     console.log("죽도록 공부함");
//   },
//   introduce() {
//     console.log("안녕하세요");
//   },
// };
// const studentB = {
//   name: "슛돌이",
//   grade: "B+",
//   age: "21",
//   study() {
//     console.log("축구를 좋아함");
//   },
//   introduce() {
//     console.log("공만주세요");
//   },
// };

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자 함수
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드 = 함수
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다`);
  }
}

const studentA = new Student("짱구", "A+", 22);
studentA.introduce();
console.log();

// Js Class 생성 후 상속가능
// 부모 > 자식

class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }
  // 메서드
  programing() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

const studentB = new StudentDeveloper("슛돌이", "B+", "21", "js");
console.log(studentB);
studentB.programing();

// TS class 생성하거나 상속받는 개념은 js와 거의 동일하나 살짝
// "접근제어자" + "타입정의"만 상의함
