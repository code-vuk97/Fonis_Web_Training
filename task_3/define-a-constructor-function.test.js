import Dog from './define-a-constructor-function';

xdescribe('make a dog constructor function', () => {
  const newDog = new Dog('snuppy', 'white', 4);

  it('should have a name property set to a string', () => {
    expect(typeof newDog.name).toBe('string');
  });

  it('should have a color property set to a string.', () => {
    expect(typeof newDog.color).toBe('string');
  });

  it('should have a numLegs property set to a number.', () => {
    expect(typeof newDog.numLegs).toBe('number');
  });

});