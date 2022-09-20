/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('The function numbers', () => {
  it('returns true when receives a number-only array and false when receives a mixed array ', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  });
  it('returns false when receives an array with numbers and numbers as strings', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  })
  it('returns false when receives an array with numbers and letters', () =>{
    expect(numbers([1, 'a', 3])).toBeFalsy();
  })
  it('returns false when receives an empty array', () => {
    expect(numbers([' '])).toBeFalsy();
  })
  });

