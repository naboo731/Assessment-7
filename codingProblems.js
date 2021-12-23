//// SUM ZERO ////
//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const sumZero = array => {
let value = "False"
for (i = 0; i < array.length; i++){
        for (j = 0; j < array.length; j++){
            if (i !== j){
             if(array[i] + array[j] === 0){
                value = "True"
            }
        }
    }     
}   return value
}

//Tests
// console.log(sumZero([1, 2, 3])) //PASSED
// console.log(sumZero([1, 2, 3, -2])) //PASSED

//Time Complexity: O(n^2)

////UNIQUE CHARACTERS ////
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = (string) => {                 
    let uniqueChars = new Set([])
    for (let i = 0; i < string.length; i++) {
      uniqueChars.add(string[i])
     }
        return uniqueChars.size === string.length
      }

//Tests
// console.log(hasUniqueChars('Monday')) //PASSED
// console.log(hasUniqueChars('Moonday')) //PASSED

//Time complexity: O(n)

/// PANGRAM SENTENCE ////
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = string => {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false
      }
    }
    return true
  }

// console.log(isPangram("The quick brown fox jumps over the lazy dog!")) //PASSED
// console.log(isPangram("I like cats, but not mice")) //PASSED

//Time Complexity: O(n^2)

/// LONGEST WORD ////
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = array => {
    let longestWord = 0
    for (let i = 0; i < array.length; i++){
        if (array[i].length > longestWord){
	    longestWord = array[i].length
     }
  }
  return longestWord
}

// console.log(findLongestWord(['cat', 'mouse', 'clown', 'helicopter', 'pneumonoultramicroscopicsilicovolcanoconiosis'])) //PASSED

// Time Complexity: O(n)
