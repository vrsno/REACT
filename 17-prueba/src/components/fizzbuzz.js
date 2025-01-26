export const fizzbuzz = (num) => {
  if (typeof num !== "number") {
    return "Error: the argument must be a number";
  }

  const divisible = (divisor, num) => num % divisor === 0;

  if (num === 0) return num;
  // fizzbuzz
  if (divisible(3, num) && divisible(5, num)) return "fizzbuzz";
  // si es multiplo de 3
  if (divisible(3, num)) return "fizz";
  // si es multiplo de 5
  if (divisible(5, num)) return "buzz";

  return num;
};

function print(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
}
print(16);
