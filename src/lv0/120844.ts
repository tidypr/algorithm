// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers: number[], direction: string) {
  if (direction === "left") {
    const el = numbers.shift();
    return [...numbers, el];
  } else if (direction === "right") {
    const el = numbers.pop();
    return [el, ...numbers];
  }
}

console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
