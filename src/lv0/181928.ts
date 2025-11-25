// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list: number[]) {
  const oddNum = num_list.filter((x) => x % 2 === 1);
  const evenNum = num_list.filter((x) => x % 2 === 0);

  return parseInt(oddNum.join("")) + parseInt(evenNum.join(""));
}

const reuslt1 = solution([3, 4, 5, 2, 1]);
const reuslt2 = solution([5, 7, 8, 3]);

console.log(reuslt1);
console.log(reuslt2);
