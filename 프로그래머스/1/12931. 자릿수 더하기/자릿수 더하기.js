function solution(n)
{
    var answer = 0;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    const numArray = n.toString().split('')
    answer = numArray.reduce((prev,cur) => +prev + +cur, 0)

    return answer;
}