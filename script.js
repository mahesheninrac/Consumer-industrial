/*
Algorithm: Bubble Sort
Input: array of numbers
Output: the array with the numbers sorted in place and in ascending order

Steps:
1. Iterate n - 1 times:
2.   Iterate from the start of the array to the end of the unsorted numbers:
3.     If the current number is greater than the one after it:
4.       Swap the numbers. Bubble the greater number up.
*/

// function bubbleSort(numbers) {
//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let j = 0; j < numbers.length - i - 1; j++) {
//             if (numbers[j] > numbers[j + 1]) {
//                 const temp = numbers[j]
//                 numbers[j] = numbers[j + 1]
//                 numbers[j + 1] = temp
//             }
//         }
//     }
// }

// const numbers = [5, 3, 2, 4, 1]
// bubbleSort(numbers)
// console.log(numbers)

// function linearSearch(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([5, 3, 2, 4, 1], 4))


// function binarySearch(numbers, target){
//     let l=0;
//     let r=numbers.length

//     while(l <=r){
//         const m = l + Math.floor((r-l)/2)
//         if(numbers[m] === target){
//             return m
//         } else if(numbers[m] < target){
//             l = m+1
//         }else {
//             r =m-1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([5, 3, 2, 4, 1], 4))

export function tagSumLottery(communications, lotteryNumber) {
    const winners = []
    const commute = new Map();

    for (let i = 0; i < communications.length; i++) {
        const currentTag = communications[i].tag;
        const currentName = communications[i].name

        const difference = lotteryNumber - currentTag
        if (commute.has(difference)) {
            winners.push([commute.get(difference, currentName)].toSorted())
        } else {
            commute.set(currentTag, currentName)
        }
    }

    if (winners.length > 0) {
        return winners
    }
    return "No winners"
}

const communications = [
    { tag: 10, name: "Tim the T-Rex" },
    { tag: 26, name: "Vince the Veloci" },
    { tag: 40, name: "Sue the Bellu" },
    { tag: 47, name: "Dean the Edmon" },
    { tag: 15, name: "Sam the Seismo" },
    { tag: 24, name: "Karen the Cryol" }
]
const lotteryNumber = 50
// const winners = [
//   ["Sue the Bellu", "Tim the T-Rex"],
//   ["Karen the Cryol", "Vince the Veloci"]
// ]

console.log(tagSumLottery(communications, lotteryNumber))