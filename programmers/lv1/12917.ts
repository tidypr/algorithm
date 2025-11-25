// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s: string) {
  const sArr = s.split("");
  const numArr = sArr.map((x) => x.charCodeAt(0));
  numArr.sort((a, b) => b - a);

  const charArr = numArr.map((x) => String.fromCharCode(x));

  return charArr.join("");
}

console.log(solution("Zbcdefg"));
