// https://school.programmers.co.kr/learn/courses/30/lessons/181882

const calArr = (x: number) => {
  if (x >= 50 && x % 2 === 0) {
    return x / 2;
  } else if (x < 50 && x % 2 === 1) {
    return x * 2;
  } else {
    return x;
  }
};

function solution(arr: number[]) {
  return arr.map(calArr);
}

const result = solution([1, 2, 3, 100, 99, 98]);
console.log(result);
