// https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string: string) {
  const answer: string[] = [];

  for (let i = -1; i > -my_string.length - 1; i--) {
    console.log(my_string.slice(i));
    answer.push(my_string.slice(i));
  }

  answer.sort();

  return answer;
}

const result1 = solution("banana");
console.log(result1);
const result2 = solution("programmers");
console.log(result2);
