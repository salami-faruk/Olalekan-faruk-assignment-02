// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
  let sum = 0;
  for(let a of arrayOfNumbers)
  sum +=a;
  return sum;
}
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
   let count = 0;
   for(let a of arrayOfNumbers){
   if(a % 2 === 0){
  count ++;
        }
    }
    return count;
    
}
 assignment.countEvenNumbers = countEvenNumbers;

 

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

