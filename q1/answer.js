var runtime = function (func) {
    var start = performance.now();
    func();
    var end = performance.now();
    console.log("Execution time: ".concat(end - start, " ms"));
};
var Addup = function (arr) {
    // maximum 16 unit
    var result = (parseInt(arr.join("")) + 1)
        .toString()
        .split("")
        .map(function (num) { return parseInt(num); });
    return result;
};
var Addup2 = function (arr) {
    var status = false;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (status) {
            break;
        }
        if (arr[i] === 9) {
            arr[i] = 0;
            if (i === 0) {
                arr.unshift(1);
            }
        }
        else {
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
var tests = [
    [2, 3],
    [9],
    [9, 9, 9],
    [7, 8, 8],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3],
];
for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
    var test = tests_1[_i];
    // console.log(
    //   runtime(() => Addup(test)),
    //   runtime(() => Addup2(test))
    // );
    console.log(Addup(test), Addup2(test));
}
