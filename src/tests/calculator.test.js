const test = require('node:test');
const assert = require('node:assert/strict');
const {
  add, subtract, multiply, divide, modulo, power, squareRoot, calculate,
} = require('../calculator');

test('modulo', () => {
  assert.equal(modulo(5, 2), 1);
  assert.equal(modulo(10, 5), 0);
  assert.equal(modulo(-5, 3), -2);
});

test('modulo by zero throws', () => {
  assert.throws(() => modulo(5, 0), /Modulo by zero/);
});

test('power', () => {
  assert.equal(power(2, 3), 8);
  assert.equal(power(5, 0), 1);
  assert.equal(power(2, -1), 0.5);
});

test('square root', () => {
  assert.equal(squareRoot(16), 4);
  assert.equal(squareRoot(0), 0);
  assert.equal(squareRoot(2.25), 1.5);
});

test('square root of a negative number throws', () => {
  assert.throws(() => squareRoot(-4), /negative number/);
});

test('calculate supports modulo and power operators', () => {
  assert.equal(calculate(5, '%', 2), 1);
  assert.equal(calculate(2, '^', 3), 8);
});

test('addition', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-2, 3), 1);
  assert.equal(add(0, 0), 0);
});

test('subtraction', () => {
  assert.equal(subtract(10, 4), 6);
  assert.equal(subtract(4, 10), -6);
});

test('multiplication', () => {
  assert.equal(multiply(45, 2), 90);
  assert.equal(multiply(-3, 3), -9);
  assert.equal(multiply(5, 0), 0);
});

test('division', () => {
  assert.equal(divide(20, 5), 4);
  assert.equal(divide(1, 4), 0.25);
});

test('division by zero throws', () => {
  assert.throws(() => divide(1, 0), /Division by zero/);
});

test('calculate dispatches operators from the example image', () => {
  assert.equal(calculate(2, '+', 3), 5);
  assert.equal(calculate(10, '-', 4), 6);
  assert.equal(calculate(45, '*', 2), 90);
  assert.equal(calculate(20, '/', 5), 4);
});

test('calculate rejects unsupported operators', () => {
  assert.throws(() => calculate(1, '^', 2), /Unsupported operator/);
});
