const arr = [6, 7, 3, 9, 5, 6, 12];

let ans = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    ans.push(arr[i]);
  }
}
console.log(ans);
