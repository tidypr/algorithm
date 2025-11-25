// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list: string[], ex: string) {
  return str_list.filter((x) => !x.includes(ex)).join("");
}
