// https://school.programmers.co.kr/learn/courses/30/lessons/120846

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

function solution(n: number) {
  let answer = 0;

  for (let i = 0; i < n + 1; i++) {
    if (helper(i) >= 3) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(10));
console.log(solution(15));
