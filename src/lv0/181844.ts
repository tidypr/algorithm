// https://school.programmers.co.kr/learn/courses/30/lessons/181844

// function solution(arr: number[], delete_list: number[]) {
//   const answer = [...arr];
//   for (let i = 0; i < answer.length; i++) {
//     if (delete_list.includes(answer[i])) {
//       answer.splice(i, 1);
//     }
//   }
//   return answer;
// }

function solution(arr: number[], delete_list: number[]) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (!delete_list.includes(arr[i])) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
