// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr: number[]) {
  let prevNum = arr[0];
  const newArr = [];

  for (let i = 1; i < arr.length + 1; i++) {
    if (arr[i] === prevNum) {
    } else {
      newArr.push(prevNum);
      prevNum = arr[i];
    }
  }

  return newArr;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
