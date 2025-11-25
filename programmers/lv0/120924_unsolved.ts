// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common: number[]) {
  const arr: number[] = [];
  let curNum = common[0];
  for (let i = 1; i < common.length; i++) {
    const sub = common[i] - curNum;
    curNum = common[i];

    arr.push(sub);
  }

  if (arr.every((x) => x === arr[0])) {
    // 등차수열
    const cha = common[1] - common[0];
    return common[common.length - 1] + cha;
  } else {
    // 등비수열
    if (Math.abs(arr[0]) > Math.abs(arr[1])) {
      return common[common.length - 1] / 2;
    }
    return common[common.length - 1] * 2;
  }
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([-5, -4, -3, -2])); // -1
console.log(solution([2, 4, 8])); // 16 증가
console.log(solution([2, 4, 8, 16])); // 32 증가
console.log(solution([-2, -4, -8])); // -16 증가
console.log(solution([16, 8, 4])); // 2 감소
console.log(solution([-16, -8, -4])); // -2 감소
console.log(solution([-4, -8, -16])); // -32 증가
