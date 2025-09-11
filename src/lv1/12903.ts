// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s: string) {
  const substr = s.length % 2 === 0 ? 2 : 1;

  const idx = Math.ceil(s.length / 2) - 1;

  return s.substring(idx, idx + substr);
}

console.log(solution("abcde"));
console.log(solution("qwer"));
