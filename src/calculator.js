/**
 * Node.js CLI calculator.
 *
 * Supported operations:
 *   - addition        (+)
 *   - subtraction     (-)
 *   - multiplication  (*)
 *   - division        (/)
 *   - modulo          (%)
 *   - exponentiation  (^)
 *   - square root     (squareRoot function)
 *
 * Usage: node src/calculator.js <number> <operator> <number>
 * Example: node src/calculator.js 2 + 3
 */

/** Addition: returns a + b. */
function add(a, b) {
  return a + b;
}

/** Subtraction: returns a - b. */
function subtract(a, b) {
  return a - b;
}

/** Multiplication: returns a * b. */
function multiply(a, b) {
  return a * b;
}

/** Division: returns a / b. Throws if b is zero. */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/** Modulo: returns the remainder of a divided by b. Throws if b is zero. */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/** Exponentiation: returns base raised to the exponent. */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/** Square root: returns the square root of n. Throws for negative numbers. */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

const operations = { '+': add, '-': subtract, '*': multiply, '/': divide, '%': modulo, '^': power };

/** Evaluates `a operator b` using one of the supported operations. */
function calculate(a, operator, b) {
  const operation = operations[operator];
  if (!operation) {
    throw new Error(`Unsupported operator: ${operator}`);
  }
  return operation(a, b);
}

if (require.main === module) {
  const [a, operator, b] = process.argv.slice(2);
  const x = Number(a);
  const y = Number(b);
  if (process.argv.length !== 5 || Number.isNaN(x) || Number.isNaN(y)) {
    console.error('Usage: node src/calculator.js <number> <+|-|*|/> <number>');
    process.exit(1);
  }
  try {
    console.log(calculate(x, operator, y));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
