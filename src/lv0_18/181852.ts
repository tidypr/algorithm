// https://school.programmers.co.kr/learn/courses/30/lessons/181852

function solution(num_list: number[]) {
  const nlist = [...num_list];
  nlist.sort((a, b) => a - b);
  return nlist.slice(5, nlist.length);
}
