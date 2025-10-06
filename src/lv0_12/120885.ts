// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1: string, bin2: string) {
  const num = `${+bin1 + +bin2}`
    .padStart(11, "0")
    .split("")
    .map((x) => +x);
  const result: number[] = [];

  let up = 0;
  for (let i = 10; i > -1; i--) {
    const cur = num[i] + up;
    // console.log(cur);

    up = Math.floor(cur / 2);
    const rest = cur % 2;
    result.unshift(rest);
  }

  // console.log(num);
  // console.log(result);

  return `${+result.join("")}`;
}

console.log(solution("1001", "1111"));
