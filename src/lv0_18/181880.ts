// https://school.programmers.co.kr/learn/courses/30/lessons/181880

const numCount = (inputNum: number) => {
  let count = 0;
  while (inputNum / 2 >= 1) {
    inputNum = inputNum % 2 === 0 ? inputNum / 2 : (inputNum - 1) / 2;
    count++;
  }
  return count;
};

function solution(num_list: number[]) {
  let count = 0;

  for (const num of num_list) {
    const temp = numCount(num);
    count += temp;
  }

  return count;
}

const result = solution([12, 4, 15, 1, 14]);
console.log(result);
