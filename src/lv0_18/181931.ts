// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a: number, d: number, included: boolean[]) {
  const answer: number[] = [];
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer.push(a + i * d);
    }
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}

const result1 = solution(3, 4, [true, false, false, true, true]);
const result2 = solution(7, 1, [
  false,
  false,
  false,
  true,
  false,
  false,
  false,
]);

console.log(result1);
console.log(result2);
