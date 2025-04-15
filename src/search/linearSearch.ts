import { data } from '../data';

const linearSearch = (arr: string[], target: string): number => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`찾는값: ${target}, 비교값: ${arr[i]} 카운트: ${i + 1}, 인덱스: ${i}`);
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}


const result = linearSearch(data, 'x');
console.log(`결과: ${data[result]}, 인덱스: ${result}`);
