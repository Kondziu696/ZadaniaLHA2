const getAllPoweredValuesLimitedByNumber = (initialValue) => {
  //const tablica:number[] = [];
  const tablica = [];
  let kwadrat = 0;

  for (let i = 1; kwadrat < initialValue; i++) {
    kwadrat = Math.pow(i, 2);
    tablica.push(kwadrat);

    if (kwadrat >= initialValue) {
      tablica.pop();
    }
  }

  return tablica;
};

console.log(getAllPoweredValuesLimitedByNumber(144));
