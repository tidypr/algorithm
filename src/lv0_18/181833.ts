// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n: number) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const newArr = Array.from({ length: n }, (x) => x);
    newArr.fill(0);
    newArr[i] = 1;
    result.push(newArr);
  }
  return result;
}

console.log(solution(3));
