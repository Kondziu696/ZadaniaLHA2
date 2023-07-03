const getArraySum = (numbersArray: number[], initialValue: number): number => {
  if (numbersArray.length === 0) {
    return initialValue;
  }

  initialValue = initialValue + numbersArray[0];
  numbersArray = numbersArray.slice(1);
  return getArraySum(numbersArray, initialValue);
};

const exampleArray = [1, 2, 3];
const startingNumber = 5;
const result = getArraySum(exampleArray, startingNumber);
console.log(result);
