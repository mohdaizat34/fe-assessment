// Write a function that generates a random integer between two given values.

function randomizeInteger(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomizeInteger(5,10));    