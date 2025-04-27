
export function sumOfTwoNumbers(a: number, b: number): number {
  return a + b;
}

export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Negative numbers are not allowed');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}