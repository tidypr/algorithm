//https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString: string, pat: string) {
  let count = 0;
  let startIndex = 0;
  let endIndex = startIndex + pat.length;

  for (let i = 0; i < myString.length - pat.length + 1; i++) {
    const str = myString.slice(startIndex, endIndex);
    // console.log(`${str} ${pat} ${startIndex} ${endIndex}`);
    startIndex++;
    endIndex++;

    str === pat ? count++ : null;
  }

  return count;
}

const result1 = solution("banana", "ana");
console.log(result1);
const result2 = solution("aaaa", "aa");
console.log(result2);
