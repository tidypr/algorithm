// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s: string) {
  const sArr = s.split(" ");
  const stack = [];
  for (const s of sArr) {
    s === "Z" ? stack.pop() : stack.push(+s);
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
}
