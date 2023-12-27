const Addup = (arr: number[]): number[] => {
  const result = (parseInt(arr.join("")) + 1)
    .toString()
    .split("")
    .map((num) => parseInt(num));

  return result;
};

/*
input [2,3] return [2,4]
input [9] return [1,0]
input [9,9,9] return [1,0,0,0]
input [7,8,8] return [7,8,9]
*/

const tests = [[2, 3], [9], [9, 9, 9], [7, 8, 8]];

for (const test of tests) {
  console.log(Addup(test));
}
