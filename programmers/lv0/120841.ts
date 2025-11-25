// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot: number[]) {
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    return 3;
  } else if (dot[0] > 0 && dot[1] < 0) {
    return 4;
  }
}
