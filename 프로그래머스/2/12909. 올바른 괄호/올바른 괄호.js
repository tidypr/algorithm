function solution(s){
    const stack = []
    
    for(str of s){
        if(str === '(') {
            stack.push(str)
        } else if(str === ')') {
            if(stack.length >= 1){
                stack.pop()    
            } else {
                return false
            }
        }
    }
    
    var answer = stack.length === 0 ? true : false;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}