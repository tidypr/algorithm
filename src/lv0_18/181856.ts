function solution(arr1: number[], arr2: number[]) {
  // 배열 합계
  const arrSum = (arr1: number[]) => arr1.reduce((a, b) => a + b, 0);

  var answer = 0;
  if (arr1.length > arr2.length) {
    answer = 1;
  } else if (arr1.length < arr2.length) {
    answer = -1;
  } else {
    const arr1sum = arrSum(arr1);
    const arr2sum = arrSum(arr2);
    if (arr1sum > arr2sum) {
      answer = 1;
    } else if (arr1sum < arr2sum) {
      answer = -1;
    } else {
      answer = 0;
    }
  }
  return answer;
}

console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
