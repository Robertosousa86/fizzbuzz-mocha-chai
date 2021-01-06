import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {

  it('should return `Fizz` when multiple for 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });
});