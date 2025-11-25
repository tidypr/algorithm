// https://school.programmers.co.kr/learn/courses/30/lessons/181855

// 1. 배열의 항목마다 길이를 셈.
// 2. 길이를 키로 하는 객체를 만듦.
// 3. 객체의 키에 해당하는 값이 있으면 1을 더하고, 없으면 1로 초기화함.
// 4. 객체의 값 중 가장 큰 값을 구함.

type StringObject = {
  [key: string]: number;
};

function solution(strArr: string[]): number {
  var answer = 0;

  const objects: StringObject = {};

  for (const str of strArr) {
    const key = str.length;
    if (objects[key]) {
      objects[key] += 1;
    } else {
      objects[key] = 1;
    }
  }

  for (const key in objects) {
    if (objects[key] > answer) {
      answer = objects[key];
    }
  }

  return answer;
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
console.log(solution(["a", "d"]));
console.log(solution(["bc", "hi"]));
console.log(solution(["efg"]));
