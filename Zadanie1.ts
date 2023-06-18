const getRandomElement = (array: string[]): string | undefined => {
  const filteredArray = array.filter((x) => x !== "");
  const maxElement = filteredArray.length;

  if (maxElement === 0) return;

  return array[Math.floor(Math.random() * maxElement)];
};

const exampleArray = ["", ""];
const result1 = getRandomElement(exampleArray);
const result2 = getRandomElement(exampleArray);

console.log(result1);
console.log(result2);
