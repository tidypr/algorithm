// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr: number[]) {
  const answer: number[] = [];

  for (const arrindex of arr) {
    for (let i = 0; i < arrindex; i++) {
      answer.push(arrindex);
    }
  }

  return answer;
}

const result1 = solution([5, 1, 4]);
console.log(result1);
