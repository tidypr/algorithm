// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr: number[], flag: boolean[]) {
  let times: number;
  let isrepeat: boolean;

  const answer: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    // flag가 true면 i * 2번 추가
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
      // flag가 false면 i 번 제거
    } else {
      for (let j = 0; j < arr[i]; j++) {
        answer.pop();
      }
    }
  }

  return answer;
}

const result = solution([3, 2, 4, 1, 3], [true, false, true, false, false]);
console.log(result);
