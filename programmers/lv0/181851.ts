// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank: number[], attendance: boolean[]) {
  const filterRank = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      filterRank.push(rank[i]);
    }
  }
  filterRank.sort((a, b) => a - b);

  const result =
    rank.indexOf(filterRank[0]) * 10000 +
    rank.indexOf(filterRank[1]) * 100 +
    rank.indexOf(filterRank[2]);
  return result;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);

console.log(solution([1, 2, 3], [true, true, true]));
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
);

// [   6,     1,    5,     2,     3,    4]
// [true, false, true, false, false, true]
