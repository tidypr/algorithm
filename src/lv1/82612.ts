// https://school.programmers.co.kr/learn/courses/30/lessons/82612

// function solution(price: number, money: number, count: number) {
//   const cost = Array.from(
//     { length: count },
//     (_, index) => (index + 1) * price
//   ).reduce((acc, cur) => acc + cur, 0);

//   return cost - money;
// }

// console.log(solution(3, 20, 4));

// ==================== ** UNSOLVED ** ====================
// ==================== ** TEST 22/23 ** ====================

function solution(price: number, money: number, count: number) {
  const cost = Array.from(
    { length: count },
    (_, index) => (index + 1) * price
  ).reduce((acc, cur) => acc + cur, 0);

  if (cost - money < 0) {
    return 0;
  } else {
    return cost - money;
  }
}

console.log(solution(3, 20, 4));
