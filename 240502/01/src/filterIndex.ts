import { range } from "./range";

const array: number[] = range(1, 11);

const od: number[] = array.filter((it) => it <= 5);
const es: number[] = array.filter((it) => it > 5);

const half = array.length / 2;

const below = array.filter((val, idx) => idx < half);
const over = array.filter((val, idx) => idx >= half);

console.log(below, over);
