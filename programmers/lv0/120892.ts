// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher: string, code: number) {
  const strArr = cipher
    .split("")
    .map((x, idx) => ((idx + 1) % code === 0 ? x : ""));
  return strArr.join("");
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
