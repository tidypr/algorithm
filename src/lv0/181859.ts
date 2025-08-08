// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function solution(arr: number[]) {
  const stk: number[] = [];

  for (let arrNum = 0; arrNum < arr.length; arrNum++) {
    const prevValue = stk[stk.length - 1];
    const currValue = arr[arrNum];

    if (prevValue === undefined) {
      stk.push(currValue);
      // console.log(`${arrNum} 이전값 undefined 현재값 ${currValue}`);
      // console.log(`stack ${stk}`);
    } else if (prevValue === currValue) {
      stk.pop();
      // console.log(`${arrNum} 이전값 ${prevValue} 현재값 ${currValue}`);
      // console.log(`stack ${stk}`);
    } else {
      stk.push(currValue);
      // console.log(`${arrNum} 이전값 ${prevValue} 현재값 ${currValue}`);
      // console.log(`stack ${stk}`);
    }
  }

  if (stk.length === 0) {
    stk.push(-1);
  }

  return stk;
}

const result1 = solution([0, 1, 1, 1, 0]);
console.log(result1);
const result2 = solution([0, 1, 0, 1, 0]);
console.log(result2);
const result3 = solution([0, 1, 1, 0]);
console.log(result3);
