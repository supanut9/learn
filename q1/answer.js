var Addup = function (arr) {
    var result = (parseInt(arr.join("")) + 1)
        .toString()
        .split("")
        .map(function (num) { return parseInt(num); });
    return result;
};
/*
input [2,3] return [2,4]
input [9] return [1,0]
input [9,9,9] return [1,0,0,0]
input [7,8,8] return [7,8,9]
*/
var tests = [[2, 3], [9], [9, 9, 9], [7, 8, 8]];
for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
    var test = tests_1[_i];
    console.log(Addup(test));
}
