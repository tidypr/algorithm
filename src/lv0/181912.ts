// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs: string[], k: number, s: number, l: number) {
  const answer = intStrs.map((x) => parseInt(x.slice(s, s + l))).filter((x) => x > k);
  return answer;
}

const result = solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5);

console.log(result);
