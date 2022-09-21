const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
   expect(typeof productDetails).toMatch(/function/);
  });
  it('checks whether the function productDetails returns an array', () => {
    expect(Array.isArray(productDetails('alcool', 'mascara'))).toBeTruthy;
  });
  it('checks whether the function productDetails returns 2 items', () => {
    expect(Array.from(productDetails('alcool', 'mascara')).length).toBe(2);
  });
  it('checks whether the function productDetails return has two objects', () => {
    expect(typeof Array.from(productDetails('alcool', 'mascara'))[0]).toMatch(/object/)
    expect(typeof Array.from(productDetails('alcool', 'mascara'))[1]).toMatch(/object/);
  });
  expect.extend({
    argumentsNotToMatch(argument1, argument2) {
      if (argument1 !== argument2) {
        return true;
      }
    }
  });
  it('checks if different arguments return different objects', () => {
    expect(productDetails('alcool', 'mascara')).argumentsNotToMatch.toBeTruthy;
    expect(Array.from(productDetails('alcool', 'mascara'))[0] !== 
    Array.from(productDetails('alcool', 'mascara'))[1]).toBeTruthy;
    expect(Array.from(productDetails('alcool', 'mascara'))[0].details.productId).toMatch(/ *123$/);
  });
});