// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list: number[]) {
  const odd = num_list.filter((x) => x % 2 === 1);
  const even = num_list.filter((x) => x % 2 === 0);
  return [even.length, odd.length];
}
