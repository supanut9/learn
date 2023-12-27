const runtime = (func) => {
  const start = performance.now();
  func();
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
};

const Addup = (arr: number[]): number[] => {
  // maximum 16 unit
  const result = (parseInt(arr.join("")) + 1)
    .toString()
    .split("")
    .map((num) => parseInt(num));

  return result;
};

// O(n) -> Best Case n = 1
const Addup2 = (arr: number[]): number[] => {
  let status = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (status) {
      break;
    }

    if (arr[i] === 9) {
      arr[i] = 0;

      if (i === 0) {
        arr.unshift(1);
      }
    } else {
      arr[i] += 1;

      status = true;
    }
  }
  return arr;
};

/*
input [2,3] return [2,4]
input [9] return [1,0]
input [9,9,9] return [1,0,0,0]
input [7,8,8] return [7,8,9]
*/

const tests = [
  [2, 3],
  [9],
  [9, 9, 9],
  [7, 8, 8],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3],
];

for (const test of tests) {
  // console.log(
  //   runtime(() => Addup(test)),
  //   runtime(() => Addup2(test))
  // );
  console.log(Addup(test), Addup2(test));
}
