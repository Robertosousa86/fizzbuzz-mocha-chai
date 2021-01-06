import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {

  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  })
});