// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string: string, index_list: number[]) {
  const answer = [];

  for (let i = 0; i < index_list.length; i++) {
    answer.push(my_string.slice(index_list[i], index_list[i] + 1));
  }

  return answer.join("");
}

const result1 = solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]);
const result2 = solution("zpiaz", [1, 2, 0, 0, 3]);

console.log(result1);
console.log(result2);
