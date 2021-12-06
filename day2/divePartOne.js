// Day 2 Dive

const fs = require('fs')

// Get input values as an array of numbers
const input = fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    const input = data.toString();
    // Creates Multidimensional array
    const directionArray = input.split(/\r?\n/).map((item) => item.split(' '))

    console.log(handleDirectionCalculation(directionArray));
})

/**
 * handleDirectionCalculation
 * @param {*} dirArray Multidimensional array where each sub array 
 * contains the direction and the amount
 * @returns horizontal sum times vertical sum
 */
const handleDirectionCalculation = (dirArray) => {
    let horizontal = 0;
    let vertical = 0;
    for (let x = 0; x < dirArray.length; x++) {
        let curNumber = parseInt(dirArray[x][1])
        if (dirArray[x][0] === 'forward') {
            horizontal += curNumber
        }
        if (dirArray[x][0] === 'down') {
            vertical += curNumber
        }
        if (dirArray[x][0] === 'up') {
            vertical -= curNumber
        }
    }
    return (horizontal * vertical);
}