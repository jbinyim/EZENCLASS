// 1 : 가위 2: 바위 3: 보
const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
let ans = [];
for (let i = 0; i < a.length; i++) {
  // console.log(a[i], b[j]);
  if (a[i] === b[i]) {
    ans.push("D");
  } else if (a[i] === 1 && b[i] === 3) {
    ans.push("A");
    // console.log("A");
  } else if (a[i] === 2 && b[i] === 1) {
    ans.push("A");
    // console.log("B");
  } else if (a[i] === 3 && b[i] === 2) {
    ans.push("A");
  } else {
    ans.push("B");
    // console.log("D");
  }
}
console.log(ans);
