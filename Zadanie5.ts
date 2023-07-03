const areTheyEqual = (firstValue: any, secondValue: any) => {
  const result = JSON.stringify(firstValue) === JSON.stringify(secondValue);
  return result;
};

console.log(areTheyEqual("8", "8"));
console.log(areTheyEqual("8", 8));
console.log(areTheyEqual("Hi there", "Hi there."));
