// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken: number) {
  let coupon = chicken;
  let serviceChicken = 0;

  while (coupon >= 10) {
    serviceChicken++;
    coupon -= 10;
    coupon++;
  }

  return serviceChicken;
}

console.log(solution(100));
console.log(solution(1081));
