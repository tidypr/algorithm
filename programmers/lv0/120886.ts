// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before: string, after: string) {
  const beforeArr = before.split("");
  const afterArr = after.split("");

  for (const ar of beforeArr) {
    if (afterArr.includes(ar)) {
      const idx = afterArr.indexOf(ar);
      afterArr.splice(idx, 1);
    }
  }

  return afterArr.length === 0 ? 1 : 0;
}

console.log(solution("olleh", "hello"));

// function solution(before, after) {
//   let temp = before.split("");
//   temp.reverse();
//   const result = temp.join("");

//   return result === after ? 1 : 0;
// }
