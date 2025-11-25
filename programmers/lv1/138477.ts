// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k: number, score: number[]) {
  const result = [];

  for (let i = 1; i <= score.length; i++) {
    const sorted = score.slice(0, i);
    sorted.sort((a, b) => b - a);

    const rank = sorted.slice(0, k);

    result.push(rank[rank.length - 1]);
  }

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4,	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
