// https://school.programmers.co.kr/learn/courses/30/lessons/120838

const morse: { [key: string]: string } = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

function solution(letter: string) {
  const arrSplit = letter.split(" ");
  const result: string[] = [];

  for (const arrstr of arrSplit) {
    result.push(morse[arrstr]);
  }

  return result.join("");
}

solution(".--. -.-- - .... --- -.");
