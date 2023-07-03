const changeFirstLetters = (text: string): string => {
  if (text.length === 0) {
    console.log("Zbyt krótki ciąg znaków do użycia funkcji");
    return text;
  }
  const parts: string[] = text.split(" ");

  const result = parts.reduce((accumulator, element) => {
    const firstLetter = element.charAt(0);
    let modifiedFirstLetter = "";

    if (firstLetter === firstLetter.toUpperCase()) {
      modifiedFirstLetter = firstLetter.toLowerCase();
    } else if (firstLetter === firstLetter.toLowerCase()) {
      modifiedFirstLetter = firstLetter.toUpperCase();
    } else {
      console.log("Słowo nie zaczyna się od litery.");
    }

    const modifiedElement = element.replace(/^./, modifiedFirstLetter);

    if (accumulator === "") {
      return modifiedElement;
    } else {
      return accumulator + " " + modifiedElement;
    }
  }, "");

  return result;
};

const exampleText = "Pisze tutaj cokolwiek, a Ala ma kota";
console.log(changeFirstLetters(exampleText));
