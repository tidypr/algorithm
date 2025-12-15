// https://school.programmers.co.kr/learn/courses/30/lessons/181945

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('')

for(const i of input) {
  console.log(i)
}