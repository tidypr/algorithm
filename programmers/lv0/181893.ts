// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr: number[], query: number[]) {
  for (const [index, num] of query.entries()) {
    console.log(index, num);
    if (index % 2 === 0) {
      console.log("even");
      arr.splice(num + 1);
      console.log(arr);
    } else {
      console.log("odd");
      arr.splice(0, num);
      console.log(arr);
    }
  }
  return arr;
}

const result = solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);
console.log(result);
