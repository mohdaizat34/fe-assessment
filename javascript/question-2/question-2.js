// Write a function that removes duplicate values from an array.

var duplArray = ["a","a","b","c","c","d"]

function removeDupl(array) {
    return array.filter((item,index) => array.indexOf(item) == index);  
}

console.log(removeDupl(duplArray)); 