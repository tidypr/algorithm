// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number: string) {
  const preNum = phone_number.slice(0, phone_number.length - 4);
  const postNum = phone_number.slice(
    phone_number.length - 4,
    phone_number.length
  );

  return `${"*".repeat(preNum.length)}${postNum}`;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
