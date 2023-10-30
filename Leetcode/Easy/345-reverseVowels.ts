/*
   Problem: https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

   Subject: string & array manipulation, two pointers
*/

function reverseVowels(s: string): string {
    // create vowels, split input, create pointers
    const arr = s.split('')
    const vowels = 'aeiouAEIOU'
    let left = 0
    let right = arr.length - 1

    // 3 while loops to change pointers & check for vowels
    while (left < right) {
        while (left < right && !vowels.includes(arr[left])) {
            left++
        }

        while (left < right && !vowels.includes(arr[right])) {
            right--
        }

        // reverse indicies if necessary. AND INCREASE POINTERS
        const reverse = ([arr[right], arr[left]] = [arr[left], arr[right]])
        left++
        right--
    }

    // return joined split array as string
    return arr.join('')
}

console.log(reverseVowels('leetcode'))
