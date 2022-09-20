/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => { 
    expect(circle(NaN)).toBe(undefined);
  });
  it('returns an object', () => {
    expect(typeof circle(3)).toMatch(/object/);
  });
  it('returns 3 properties', () => {
    expect(Object.keys(circle(3)).length).toBe(3);
  });
  it('returns undefined when receives no arguments', () => {
    expect(circle()).toBe(undefined);
  });
  it('returns a number close to 12.56 for a radius of 2', () => {
    expect(circle(2).circumference).toBeCloseTo(12.56);
  });
  it('returns a number close to 18.84', () => {
    expect(circle(3).area).toBeCloseTo(28.26);
  });
  it('returns the correct data for a circle with a radius of 3', () => {
    expect(circle(3).radius).toBe(3);
    expect(circle(3).area).toBeCloseTo(28.26);
    expect(circle(3).circumference).toBeCloseTo(18.84);  
    })
  });

