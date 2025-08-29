// https://school.programmers.co.kr/learn/courses/30/lessons/181881

const calArr = (x: number) => {
  if (x >= 50 && x % 2 === 0) {
    return x / 2;
  } else if (x < 50 && x % 2 === 1) {
    return x * 2 + 1;
  } else {
    return x;
  }
};

const checkArr = (x: number[], y: number[]) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return true;
    }
  }
  return false;
};

function solution(arr: number[]) {
  let prevArr = arr;
  let nextArr = prevArr.map(calArr);
  let count = 0;
  let isDiff = true;

  if (!checkArr(prevArr, nextArr)) {
    return 0;
  }

  while (isDiff) {
    prevArr = nextArr;
    nextArr = prevArr.map(calArr);
    isDiff = checkArr(prevArr, nextArr);
    count++;
  }
  return count;
}

const result = solution([1, 2, 3, 100, 99, 98]);
// const result = solution([63]);

console.log(result);
