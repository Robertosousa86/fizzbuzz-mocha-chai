import { expect } from 'chai';

describe('Main', () => {

  it('should return `Fizz` when multiple for 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });
});