import { pureDelete } from "./pureDelete";

const mixedArray: object[] = [
  [],
  { name: "David" },
  { name: "Jame", age: 20 },
  ["Javascript"],
];

const objectOnly: object[] = pureDelete(mixedArray, (value) =>
  Array.isArray(value)
);

console.log(objectOnly, mixedArray);
