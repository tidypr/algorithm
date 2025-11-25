// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency: number[]) {
  const sortedArr = [...emergency];
  sortedArr.sort((a, b) => b - a);

  const result = [];

  for (let i = 0; i < sortedArr.length; i++) {
    result.push(sortedArr.indexOf(emergency[i]) + 1);
  }

  return result;
}

console.log(solution([30, 10, 23, 6, 100]));

