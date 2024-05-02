import { result } from "./tuple";

// Promise 객체

const dosomething = (): result => {
  try {
    throw new Error("Some error occurs...");
  } catch (e: any) {
    return [false, e.message];
  }
};
