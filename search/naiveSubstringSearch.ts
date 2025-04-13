const naiveSubstringSearch = (text: string, substring: string): number[] => {
  const occurrences: number[] = [];
  const textLength = text.length;
  const substringLength = substring.length;
  let count = 0;

  for (let i = 0; i <= textLength - substringLength; i++) {
    // 비교문자열의 시작 인덱스
    let j;
    for (j = 0; j < substringLength; j++) {
      count++;
      console.log(`비교값: ${text[i + j]} vs ${substring[j]}, 카운트: ${count}, TEXT_i: ${i + j}, SUBSTRING_i: ${j}`);
      // 비교문자열과 텍스트의 문자 비교, 일치하지 않으면, 다음 비교문자열로 이동
      if (text[i + j] !== substring[j]) {
        break;
      }
    }
    // 비교문자열이 끝까지 일치하면, 시작 인덱스 저장
    if (j === substringLength) {
      console.log('Found')
      occurrences.push(i);
    }
  }
  console.log(`총 비교 횟수: ${count}`);
  return occurrences;
}

const text = 'abadcasdabc';
const substring = 'adc';
const result = naiveSubstringSearch(text, substring);
console.log(`"${substring}"의 갯수: ${result}`);