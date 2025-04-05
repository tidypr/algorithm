"use strict";
function solution(array, n) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            answer++;
        }
    }
    return answer;
}
const array = [1, 1, 2, 3, 4, 5];
const n = 1;
const result = solution(array, n);
console.log(result);
