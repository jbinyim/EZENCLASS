import { arrayLength, isEmpty } from "./arrayLength";

interface IPerson {
  name: string;
  age?: number;
}

const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["hello", "javascript"];
const personArray: IPerson[] = [{ name: "David" }, { name: "jane", age: 30 }];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
);
