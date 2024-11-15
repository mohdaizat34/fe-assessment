// Write a function that removes all spaces from a given string.


let result; 

function removeSpace(input){
    result = input.replace(/\s+/g, '')
    
    return result 
}

console.log(removeSpace("I love coding")); 
