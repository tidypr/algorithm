// https://school.programmers.co.kr/learn/courses/30/lessons/181870

function solution(strArr: string[]) {
  return strArr.filter((x) => !x.includes("ad"));
}

const result1 = solution(["and", "notad", "abcd"]);
console.log(result1);
const result2 = solution(["there", "are", "no", "a", "ds"]);
console.log(result2);
