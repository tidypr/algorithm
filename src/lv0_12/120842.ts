// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list: number[], n: number) {
  const MAXLOOP = Math.floor(num_list.length / n);
  let slice = 0;
  const result = [];

  for (let i = 0; i < MAXLOOP; i++) {
    const temoArr = num_list.slice(slice, slice + n);
    result.push(temoArr);

    slice += n;
  }

  return result;
}

console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
