// https://school.programmers.co.kr/learn/courses/30/lessons/120894

const numberWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(numbers: string) {
  let result = numbers;

  numberWords.forEach((word, index) => {
    const regex = new RegExp(word, "g");
    result = result.replace(regex, index.toString());
  });

  return Number(result);
}

console.log(solution("onetwothreefourfivesixseveneightnine"));
