import { NumberToNumberFunc, add } from "./highOrder";

const fn: NumberToNumberFunc = add(1);
const ressult = fn(2);
console.log(ressult);
console.log(add(1)(2));
