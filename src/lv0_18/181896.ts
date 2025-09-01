// https://school.programmers.co.kr/learn/courses/30/lessons/181896

function solution(num_list: number[]) {
  const isNagativeNum = num_list.find((x) => x < 0);

  if (isNagativeNum) {
    return num_list.indexOf(isNagativeNum);
  } else {
    return -1;
  }
}

const result1 = solution([12, 4, 15, 46, 38, -2, 15]);
console.log(result1);
const result2 = solution([13, 22, 53, 24, 15, 6]);
console.log(result2);
