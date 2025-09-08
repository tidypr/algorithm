// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string: string, indices: number[]) {
  const answer = [];

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      answer.push(my_string[i]);
    }
  }

  return answer.join("");
}

const result = solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]);
console.log(result);
