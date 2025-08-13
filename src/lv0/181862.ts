// https://school.programmers.co.kr/learn/courses/30/lessons/181862

// ==================== TIME OUT ====================
// 시간복잡도: O(n)

// function solution(myStr: string) {

//   const rawData = [myStr];
//   let splitA: string[] = [];
//   let splitB: string[] = [];
//   let splitC: string[] = [];
//   let result: string[] = [];

//   for (const item of rawData) {
//     const splita = item.split("a");
//     splitA = [...splitA, ...splita];
//   }

//   for (const item of splitA) {
//     const splitb = item.split("b");
//     splitB = [...splitB, ...splitb];
//   }

//   for (const item of splitB) {
//     const splitc = item.split("c");
//     splitC = [...splitC, ...splitc];
//   }

//   result = splitC.filter((x) => x !== "");

//   if (result.length === 0) return ["EMPTY"];

//   return result;
// }

// ==================== TIME OUT ====================

// const result = solution("baconlettucetomato");
// console.log(result);
// const resul2 = solution("abcd");
// console.log(resul2);
