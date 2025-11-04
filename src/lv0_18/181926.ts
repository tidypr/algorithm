// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n: number, control: string) {
  let num: number = n;

  for (let i = 0; i < control.length; i++) {
    switch (control[i]) {
      case "w":
        num++;
        break;
      case "s":
        num--;
        break;
      case "d":
        num += 10;
        break;
      case "a":
        num -= 10;
        break;
    }
  }

  return num;
}

const result = solution(0, "wsdawsdassw");

console.log(result);
