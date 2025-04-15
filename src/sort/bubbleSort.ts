const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // console.log(temp)
}

// 두 개 요소를 비교하여 큰 값을 뒤로 보내는 방식으로 정렬하는 알고리즘
const bubbleSort = (arr: number[]) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let swapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }

      console.log(`${arr}`);
    }
    if (!swapped) break;
  }
  return arr;
}

const arr = [143, 134, 137, 132, 140, 134];
const sortedArr = bubbleSort(arr);
console.log(sortedArr);