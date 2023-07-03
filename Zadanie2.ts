const removeFirstAndLastLetter1 = (value: string): string => {
  if (value.length <= 2) {
    console.log("Zbyt krótki ciąg znaków do użycia funkcji");
    return value;
  }
  const reg = /^(.)(.*?)(.)$/;
  const stringWithoutFirstAndLastLetter = value.replace(reg, "$2");
  return stringWithoutFirstAndLastLetter;
};

const removeFirstAndLastLetter2 = (value: string): string => {
  if (value.length <= 2) {
    console.log("Zbyt krótki ciąg znaków do użycia funkcji");
    return value;
  }
  const stringWithoutFirstAndLastLetter = value.slice(1, -1);
  return stringWithoutFirstAndLastLetter;
};

const removeFirstAndLastLetter3 = (value: string): string => {
  if (value.length <= 2) {
    console.log("Zbyt krótki ciąg znaków do użycia funkcji");
    return value;
  }
  const stringWithoutFirstAndLastLetter = value.substring(1, value.length - 1);
  return stringWithoutFirstAndLastLetter;
};

console.log(removeFirstAndLastLetter1("JS"));
console.log(removeFirstAndLastLetter2("Javascript"));
console.log(removeFirstAndLastLetter3("Javascript"));
