const numArray: number[] = [1, 2, 3];
const strAraau: string[] = ["Hello", "js"];
// 배열안에 객체값이 들어가 있다면?

interface Iperson {
  name: string;
  age?: number;
}

const personArray: Iperson[] = [{ name: "David" }, { name: "jan", age: 20 }];
