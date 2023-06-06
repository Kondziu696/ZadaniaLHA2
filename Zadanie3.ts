const getSkippedSentence = (sentence, skip) => {
  const modifiedString = new String(sentence);
  //const modifiedString = sentence;

  let newString = "";
  for (let i = 0; i < modifiedString.length; i += skip) {
    newString = newString + modifiedString.charAt(i);
  }

  return newString;
};

console.log(getSkippedSentence("1234567890 abc def ghi", 3));
