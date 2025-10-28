// https://school.programmers.co.kr/learn/courses/30/lessons/181918

function solution(arr: number[]) {
  let i = 0
  const stk: number[] = [];

  while (arr[i]) {
    
    // console.log(stk[stk.length - 1], arr[i], stk)
    if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++
    } else if (stk.length > 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
}

console.log(solution([1, 4, 2, 5, 3]));
