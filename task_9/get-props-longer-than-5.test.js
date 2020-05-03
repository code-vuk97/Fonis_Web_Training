import getPropsLongerThan5 from './get-props-longer-than-5';

xdescribe('retrun properties with length greater than 5', () => {
  const obj = {
    ime: 'vuk',
    prezime: 'stefanovic',
    godiste: '97',
    status: 'mia'
  }

  it(`should return ['prezime', 'godiste', 'status']`, () => {
    expect(getPropsLongerThan5(obj)).toEqual(['prezime', 'godiste', 'status']);
  });
});