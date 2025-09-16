// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price: number) {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  } else if (price >= 300000) {
    return Math.floor(price * 0.9);
  } else if (price >= 100000) {
    return Math.floor(price * 0.95);
  } else {
    return Math.floor(price);
  }
}
