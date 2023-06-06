const getRandomElement = (byleco) => {
    const maxElement = byleco.length;
    return byleco[Math.floor(Math.random() * maxElement)];
};

const exampleArray = ["raz", "dwa", "trzy", "cztery", "piec"];
const result1 = getRandomElement(exampleArray); // result1 === "trzy"
const result2 = getRandomElement(exampleArray); // result2 === "raz"

console.log(result1);
console.log(result2);
