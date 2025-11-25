// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list: number[]) {
  const cal =
    num_list.length > 10
      ? num_list.reduce((acc, cur) => {
          return acc + cur;
        }, 0)
      : num_list.reduce((acc, cur) => {
          return acc * cur;
        }, 1);

  return cal;
}

const result1 = solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]);
console.log(result1);
const result2 = solution([2, 3, 4, 5]);
console.log(result2);
