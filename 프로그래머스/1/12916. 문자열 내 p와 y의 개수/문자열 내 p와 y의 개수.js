function solution(s){
    var answer = calc = {
        p: 0,
        y: 0
    };

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    for(const checkstr of s){
        if(checkstr === 'p' || checkstr === 'P') calc.p += 1
        if(checkstr === 'y' || checkstr === 'Y') calc.y += 1
    }
    if(calc.p === calc.y) {
        return true
    } else{
        return false
    }

}