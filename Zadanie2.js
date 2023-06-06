var getAllPoweredValuesLimitedByNumber = function (initialValue) {
  var tablica = [];
  var kwadrat = 0;

  for (var i = 1; kwadrat < initialValue; i++) {
    kwadrat = Math.pow(i, 2);
    tablica.push(kwadrat);
    
    if (kwadrat >= initialValue) {
      tablica.pop();
    }
  }
  return tablica;
};
console.log(getAllPoweredValuesLimitedByNumber(144));
