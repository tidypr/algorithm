//https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr: number[]) {
  const result = arr;
  const arrLen = arr.length;

  let count = 1;

  while (arrLen > count) {
    count *= 2;
  }

  // 2제곱까지 기존배열에 0 push
  for (let i = arrLen; i !== count; i++) {
    result.push(0);
  }

  return result;
}

const result1 = solution([1, 2, 3, 4, 5, 6]);
console.log(result1);
const result2 = solution([58, 172, 746, 89]);
console.log(result2);
const result3 = solution([]);
console.log(result3);
