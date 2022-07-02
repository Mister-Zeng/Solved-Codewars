/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x) {
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    newArray.push(Number(x[i]));
  }
  return newArray.reduce((prev, curr) => prev + curr, 0);
}
