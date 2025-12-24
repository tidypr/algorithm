// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s: string) {
  const strArr = s.split("");
  const filteredStr = [];
  const strObj: {
    [key: string]: number;
  } = {};

  for (const str of strArr) {
    if (strObj[str]) {
      strObj[str]++;
    } else {
      strObj[str] = 1;
    }
  }

  for (const key in strObj) {
    if (strObj[key] === 1) {
      filteredStr.push(key);
    }
  }

  filteredStr.sort((a, b) => a.localeCompare(b));

  return filteredStr.join("");
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
