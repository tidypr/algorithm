// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t: string, p: string) {
  const loop = t.length - p.length;
  let count = 0;

  for (let i = 0; i <= loop; i++) {
    if (Number(t.slice(i, i + p.length)) <= Number(p)) {
      count++;
    }
  }

  return count;
}

console.log(solution("3141592", "271"));
