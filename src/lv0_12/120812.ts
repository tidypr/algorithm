// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array: number[]) {
  const countNum: { [key: number]: number } = {};

  for (let i = 0; i < array.length; i++) {
    if (countNum[array[i]]) {
      countNum[array[i]]++;
    } else {
      countNum[array[i]] = 1;
    }
  }

  let maxvalue = -1;
  let maxkey: string[] = [];
  // console.log(countNum);
  for (const [key, value] of Object.entries(countNum)) {
    // 새 최대값
    if (maxvalue < value) {
      maxvalue = value;
      maxkey = [];
      maxkey.push(key);
      // 값으면 키 추가
    } else if (maxvalue === value) {
      maxkey.push(key);
    }
  }

  // 값은값 2개면 -1 리턴
  if (maxkey.length > 1) {
    return -1;
  } else {
    return +maxkey[0];
  }
}

const result1 = solution([1, 2, 3, 3, 3, 4]);
console.log(result1);

const result2 = solution([1, 1, 2, 2]);
console.log(result2);

const result3 = solution([1]);
console.log(result3);
