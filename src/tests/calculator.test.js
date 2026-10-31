const test = require('node:test');
const assert = require('node:assert/strict');
const { add, subtract, multiply, divide, calculate } = require('../calculator');

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
