function factorialOf(number) {
  let counter = 2,
    result = 1;
  while (counter <= number) {
    result *= counter;
    counter++;
  }
  return result;
}

console.log(factorialOf(12));
