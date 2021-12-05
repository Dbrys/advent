// Day 1 three-measurement sliding window.

const fs = require('fs')

// Get input values as an array of numbers
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    const input = data.toString();
    const inputArray = input.split(/\r?\n/).map((item) => parseInt(item));

    console.log(handleWindowIncreaseCount(inputArray));

})


// Handle getting the increase count from next three windows 
const handleWindowIncreaseCount = (inputArry) => {
    let increaseCount = 0;
    for (let x = 0; x < inputArry.length; x++) {
        let curWindows = (inputArry[x] + inputArry[x+1] + inputArry[x+2]);
        let nextWindows = (inputArry[x+1] + inputArry[x+2] + inputArry[x+3]);
        if (nextWindows > curWindows) {
            increaseCount++
        }
    }
    return increaseCount;
}