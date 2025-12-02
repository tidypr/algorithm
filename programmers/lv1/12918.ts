// https://school.programmers.co.kr/learn/courses/30/lessons/12918

// test 11, 18, 19 => 실패

function solution(s: string) {
  // test 11 해결
  const arr = s.split("").map((x) => Number(x));
  if (arr.includes(NaN)) return false;

  if (s.length === 4 || s.length === 6) {
    // console.log(Number(s));
    // test 18, 19 해결
    if (Number(s) || Number(s) === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// true
console.log(solution("1234"));
console.log(solution("123456"));

// false
console.log(solution("124312421"));
console.log(solution("01234"));
console.log(solution("a234"));
console.log(solution("1243a1"));
console.log(solution("12e4"));
console.log(solution("0x16"));
console.log(solution("0hello"));

// true
console.log(solution("0000"));
console.log(solution("000000"));
