function solution(phone_number) {
    const answer = phone_number.substr(-4).padStart(phone_number.length, '*')
    return answer;
}