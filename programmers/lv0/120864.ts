// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string: string) {
  const strArr = my_string.split("");
  const temp = [];

  for (const str of strArr) {
    if (Number.isNaN(+str)) {
      temp.push(" ");
    } else {
      temp.push(str);
    }
  }

  const numArr = temp
    .join("")
    .split(" ")
    .filter((x) => x !== "");

  return numArr.reduce((acc, cur) => +acc + +cur, 0);
}

console.log(solution("aAb1B2cC34oOp"));
