const getCleanedZipCode = (value: string | number): string => {
  const stringValue = value.toString();

  if (stringValue.length < 5 || stringValue.length > 6) {
    console.log("Niepoprawny format ZipCode");
    return "";
  }

  const reg = /[^0-9]/g;
  const cleanedValue = stringValue.replace(reg, "");

  if (cleanedValue.length !== 5) {
    console.log("Niepoprawny format ZipCode");
    return "";
  }

  const finalValue = cleanedValue.slice(0, 2) + "-" + cleanedValue.slice(2);
  return finalValue;
};

console.log(getCleanedZipCode(""));
console.log(getCleanedZipCode("123"));
console.log(getCleanedZipCode(123));
console.log(getCleanedZipCode("1-2-3-4-5"));
console.log(getCleanedZipCode("12-345"));
console.log(getCleanedZipCode("12 345"));
console.log(getCleanedZipCode("12345"));
console.log(getCleanedZipCode(12345));
console.log(getCleanedZipCode("123456"));
