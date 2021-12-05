// Day 1 Sonar Sweep

const fs = require('fs')

// Get input values as an array of numbers
const inputArray = fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    const input = data.toString();
    return input.split(/\r?\n/).map((item)=> parseInt(item));

}) 

// Handle getting the increase count
const handleIncreaseCount = (inputArray) => {
    let increaseCount = 0;
    for(let x = 1; x < inputArray.length; x++){
        if(inputArray[x] > inputArray[x-1]){
            increaseCount++
        }
    }
    return increaseCount;
}


console.log(handleIncreaseCount(inputArray));