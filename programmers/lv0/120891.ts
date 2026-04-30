// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order: number) {
  let count = 0;
  const numArr = `${order}`.split("");

  for (const num of numArr) {
    if (num === "3" || num === "6" || num === "9") {
      count++;
    }
  }
  return count;
}
