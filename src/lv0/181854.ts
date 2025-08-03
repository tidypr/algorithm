// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr: number[], n: number): number[] {
  const isOdd = arr.length % 2 !== 0;
  console.log(isOdd);
  // const isEven = arr.length % 2 === 0
  let answer: number[] = [];
  answer = [...arr];

  if (isOdd) {
    for (let i = 0; i < answer.length; i += 2) {
      answer[i] += n;
    }
  } else {
    for (let i = 1; i < answer.length; i += 2) {
      answer[i] += n;
    }
  }

  return answer;
}

console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));
