// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 약수 갯수
const helper = (n: number) => {
  let count = 0;

  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count;
};

function solution(left: number, right: number) {
  let answer = 0;

  for (let i = left; i < right + 1; i++) {
    if (helper(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

console.log(solution(13, 17));
