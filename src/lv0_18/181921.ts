// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l: number, r: number) {
  const answer: number[] = [];

  for (let i = l; i < r + 1; i++) {
    const test = i.toString().replaceAll("5", "").replaceAll("0", "");

    if (!test) {
      answer.push(i);
    }
  }

  if (answer.length === 0) {
    return [-1];
  }

  return answer;
}

const result1 = solution(5, 555);
console.log(result1);
const result2 = solution(10, 20);
console.log(result2);
