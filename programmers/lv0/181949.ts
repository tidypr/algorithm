// https://school.programmers.co.kr/learn/courses/30/lessons/181949

// import fs from "fs";
// const input = "aBcDeFg";
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("") as string[];

const arr = [];

for (const i of input) {
  const num = i.charCodeAt(0);
  let conv = "";

  if (65 <= num && num <= 65 + 25) {
    conv = String.fromCharCode(num + 32);
  } else {
    conv = String.fromCharCode(num - 32);
  }

  arr.push(conv);
}

console.log(arr.join(""));
