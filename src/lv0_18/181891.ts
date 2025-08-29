// https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list: number[], n: number) {
  const firstArr = [];
  const secondArr = [];

  for (const [index, num] of num_list.entries()) {
    if (index < n) {
      firstArr.push(num);
    } else {
      secondArr.push(num);
    }
  }

  console.log(firstArr, secondArr);
  return [...secondArr, ...firstArr];
}

const result1 = solution([2, 1, 6], 1);
console.log(result1);
const result2 = solution([5, 2, 1, 7, 5], 3);
console.log(result2);
