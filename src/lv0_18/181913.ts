// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string: string, queries: number[][]) {
  let myStr = my_string;

  for (let i = 0; i < queries.length; i++) {
    const sliceStrhead = myStr.slice(0, queries[i][0]);
    const sliceStrbody = myStr.slice(queries[i][0], queries[i][1] + 1);
    const sliceStrtail = myStr.slice(queries[i][1] + 1, my_string.length + 1);
    const reverseStr = sliceStrbody.split("").reverse().join("");

    myStr = [sliceStrhead, reverseStr, sliceStrtail].join("");
  }

  return myStr;
}

const result = solution("rermgorpsam", [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
]);

console.log(result);
