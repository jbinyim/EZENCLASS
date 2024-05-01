interface IPerson {
  name: string;
  age: number;
}

// 템플릿 리터럴: 문자 = `변수를 문자열로 찾아와서 값을 사용하고자 할떄`
// 리터럴 타입: 문자 타입
// 타입정의: 주석처리
// 숫자: number, 문자: string
// number = 슈퍼타입
// 10 = 서브타입

const makePerson = (name: string, age: number = 10): IPerson => {
  const person = {
    name: name,
    age: age,
  };
  return person;
};

console.log(makePerson("David"));
console.log(makePerson("David", 20));

const makePerson1 = (name: string, age: number = 10): IPerson => ({
  name,
  age,
});
