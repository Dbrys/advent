// Day 1 Sonar Sweep

const fs = require('fs')

// Get input values as an array of numbers
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    const input = data.toString();
    const inputArray = input.split(/\r?\n/).map((item) => parseInt(item));

    console.log(handleIncreaseCount(inputArray));

})


// Handle getting the increase count
const handleIncreaseCount = (inputArry) => {
    let increaseCount = 0;
    for (let x = 1; x < inputArry.length; x++) {
        if (inputArry[x] > inputArry[x - 1]) {
            increaseCount++
        }
    }
    return increaseCount;
}

