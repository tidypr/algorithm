#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int array[], size_t array_len, int n) {
    int answer = 0;

    for (int i = 0; i < array_len; i++) {
        if (array[i] == n) {
            answer++;
        };
    };

    return answer;
}

void main() {
    int arr1[] = { 1, 1, 2, 3, 4, 5 };
    int size = sizeof(arr1) / sizeof(arr1[0]);
    int n = 1;

    int result = solution(arr1, size, n);
    printf("%d\n", result);
}