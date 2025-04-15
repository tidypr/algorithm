import { data } from '../data'

const binarySearch = (arr: string[], target: string): number => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let count = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    count++;

    console.log(`찾는값: ${target}, 비교값: ${arr[mid]}, 카운트: ${count}, START_i: ${start}, END_i: ${end}, MID_i: ${mid}`);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

const result = binarySearch(data, 'g');
console.log(`결과: ${data[result]}, 인덱스: ${result}`);
