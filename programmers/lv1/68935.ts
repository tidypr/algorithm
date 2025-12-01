// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n: number) {
  const arr: number[] = [];

  while (n > 0) {
    const rest = n % 3;
    arr.push(rest);
    n = Math.floor(n / 3);
  }

  let pow = 0;
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    const cal = Math.pow(3, pow) * num;
    pow++;
    sum += cal;
  }

  return sum;
}

console.log(solution(45));
console.log(solution(125));
