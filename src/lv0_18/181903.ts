// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q: number, r: number, code: string) {
  const answer = [];
  for (const [index, str] of code.split("").entries()) {
    if (index % q === r) {
      answer.push(str);
    }
  }
  return answer.join("");
}

const result1 = solution(3, 1, "qjnwezgrpirldywt");
console.log(result1);
const result2 = solution(1, 0, "programmers");
console.log(result2);
