const algorithm = require('./index');

/**
 * Spanish
  A partir de un array de ints devuelva un array de strings aplicando las siguientes reglas:
  - Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
  - Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
  - Devuelve FizzBuzz si el número es divisible por 3 y por 5.

  * English
  From an array of ints, returns an array of strings applying the following rules:
  - Returns Fizz if the number is divisible by 3 or if it includes a 3 in the number.
  - Returns Buzz if the number is divisible by 5 or if it includes a 5 in the number.
  - Returns FizzBuzz if the number is divisible by 3 and 5.
 */

describe('Tests for "Fizzbuz algorithm', () => {
  it('It should return fizzbuzz given a number divisible by 3 and 5', () => {
    expect(algorithm([15])).toStrictEqual(["fizzbuzz"])
  });

  it('It should return fizz given a number divisible by 3', () => {
    expect(algorithm([9])).toStrictEqual(["fizz"])
  });

  it('It should return buzz given a number divisible by 5', () => {
    expect(algorithm([25])).toStrictEqual(["buzz"])
  });

  it('It should return null if the number is not divisible by 3 or 5', () => {
    expect(algorithm([8, 8])).toStrictEqual([null, null])
  });
});