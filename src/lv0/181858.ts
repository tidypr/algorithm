// https://school.programmers.co.kr/learn/courses/30/lessons/181858

function solution(arr: number[], k: number) {
  const setArr = [...new Set(arr)];
  const result = [...setArr];

  if (setArr.length >= k) {
    return setArr.splice(0, k);
  } else {
    for (let i = setArr.length; i !== k; i++) {
      result.push(-1);
    }
  }

  return result;
}

const result1 = solution([0, 1, 1, 2, 2, 3], 3);
console.log(result1);

const result2 = solution([0, 1, 1, 1, 1], 4);
console.log(result2);
