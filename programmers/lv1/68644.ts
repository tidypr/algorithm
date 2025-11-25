// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers: number[]) {
  let save: number[] = [];

  for (let i = numbers.length; i > 0; i--) {
    if (numbers.length !== 0) {
      const y = numbers.pop();
      if (y !== undefined) {
        save = [...save, ...numbers.map((x) => x + y)];
      }
    }
  }

  const rm = [...new Set(save)];
  console.log(rm);
  rm.sort((a, b) => a - b);

  return rm;
}

console.log(solution([2, 1, 3, 4, 1]));
