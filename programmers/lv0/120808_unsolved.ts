// https://school.programmers.co.kr/learn/courses/30/lessons/120808

// function solution(
//   numer1: number,
//   denom1: number,
//   numer2: number,
//   denom2: number
// ) {
//   let prev = [numer1, denom1];
//   let next = [numer2, denom2];

//   // 최소공배수 => denom1, denom2
//   let checkSame = true;

//   while (checkSame) {

//     // 분모 같은지 확인
//     if (prev[1] === next[1]) {
//       checkSame = false;
//     } else {
//       // 분모 같을때 까지 곱

//       let minValue = Math.min(prev[1], next[1]);

//       if (minValue === prev[1]) {
//         prev = prev.map((x) => x * minValue);
//       } else {
//         next = next.map((x) => x * minValue);
//       }
//     }
//   }

//   return [prev[0] + next[0], prev[1]];
// }

function solution(
  numer1: number,
  denom1: number,
  numer2: number,
  denom2: number
) {
  let prev = [numer1, denom1];
  let next = [numer2, denom2];

  // 분모곱
  prev = prev.map((x) => x * denom2);
  next = next.map((x) => x * denom1);

  // 나눌수 있을때 까지 나누기
  for (let i = Math.max(prev[0], prev[1], next[0], next[1]); i > 1; i--) {
    console.log(prev[0], prev[1], next[0], next[1]);
    if (
      prev[0] % i === 0 &&
      prev[1] % i === 0 &&
      next[0] % i === 0 &&
      next[1] % i === 0
    ) {
      prev = prev.map((x) => x / i);
      next = next.map((x) => x / i);
    }
  }

  return [prev[0] + next[0], prev[1]];
}

const result1 = solution(1, 2, 3, 4);
console.log(result1);

const result2 = solution(9, 2, 1, 3);
console.log(result2);

// const result3 = solution(1, 6, 2, 6);
// console.log(result3);
