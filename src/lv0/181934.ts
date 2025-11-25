// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq: string, eq: string, n: number, m: number) {
  if (ineq === "<" && eq === "=") {
    return n <= m ? 1 : 0;
  } else if (ineq === ">" && eq === "=") {
    return n >= m ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    return n > m ? 1 : 0;
  } else {
    return n < m ? 1 : 0;
  }
}

const reuslt1 = solution("<", "=", 20, 50);
const reuslt2 = solution(">", "!", 41, 78);

console.log(reuslt1);
console.log(reuslt2);
