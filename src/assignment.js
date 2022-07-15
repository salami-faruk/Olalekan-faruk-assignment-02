// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


//  * Challenge - 1
 
function sumOfNumbers(arrayOfNumbers) {
  let sum = 0;
  for(let a of arrayOfNumbers)
  sum +=a;
  return sum;
  return arrayOfNumbers.length;
}
console.log(sumOfNumbers([3,4,2,1]))

//  * Challenge - 2
 
function countEvenNumbers(arrayOfNumbers) {
   let count = 0;
   for(let a of arrayOfNumbers){
   if(a % 2 === 0){
  count ++;
        }
    }
    return count;
    
}
console.log(countEvenNumbers([3,4,2,1]))
// assignment.countEvenNumbers = countEvenNumbers;


 
 

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

