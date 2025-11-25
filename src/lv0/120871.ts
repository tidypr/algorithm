// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n: number) {
  const numArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i.toString().includes("3")) {
      n++;
      continue;
    } else {
      numArr.push(i);
    }
  }

  return numArr[numArr.length - 1];
}

console.log(solution(40));
