// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s: string) {
  const stack = [];

  const arr = s.split("");

  for (const ar of arr) {
    if (ar === "(") {
      stack.push(ar);
    } else {
      if (ar === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
