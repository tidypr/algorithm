// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr: number[][]) {
  const max = Math.max(arr.length, arr[0].length);

  for (let row = 0; row < max; row++) {
    if (!arr[row]) {
      const newArr = Array(max).fill(0);
      arr.push(newArr);
    }
    for (let col = 0; col < max; col++) {
      if (!arr[row][col]) {
        arr[row][col] = 0;
      }
    }
  }

  return arr;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);

console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);
