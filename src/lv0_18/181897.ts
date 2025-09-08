// https://school.programmers.co.kr/learn/courses/30/lessons/181897

// slicer = [a, b, c]
const sliceRangeSwitch = (n: number, slicer: number[], num_list: number[]) => {
  switch (n) {
    case 1:
      return [0, slicer[1], 1];
    case 2:
      return [slicer[0], num_list.length - 1, 1];
    case 3:
      return [slicer[0], slicer[1], 1];
    case 4:
      return [slicer[0], slicer[1], slicer[2]];
    default:
      return [];
  }
};

function solution(n: number, slicer: number[], num_list: number[]) {
  const indexRang = sliceRangeSwitch(n, slicer, num_list);
  const answer = [];

  for (let i = indexRang[0]; i < indexRang[1] + 1; i += indexRang[2]) {
    answer.push(num_list[i]);
  }
  return answer;
}

const result1 = solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result1);
const result2 = solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result2);
const result3 = solution(1, [1, 5, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result3);
const result4 = solution(2, [1, 5, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result4);
