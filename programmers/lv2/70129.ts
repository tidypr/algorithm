// https://school.programmers.co.kr/learn/courses/30/lessons/70129

const bin = (str: string) => {
  const arr = [];
  let n = +str;

  while (n !== 0) {
    arr.push(n % 2);
    n = Math.trunc(n / 2);
  }

  arr.reverse();
  return arr.map((x) => x.toString());
};

function solution(s: string) {
  let arr = s.split("");
  let [times, cntZero] = [0, 0];

  while (arr.length !== 1) {
    let cnt1 = arr.filter((x) => x === "1");
    let cnt0 = arr.filter((x) => x === "0");
    arr = bin(cnt1.length.toString());

    // console.log(cnt1, cnt0);
    cntZero += cnt0.length;
    times++;
  }

  return [times, cntZero];
}

// console.log(solution("0111010"));
console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));

// console.log(bin("4"));
