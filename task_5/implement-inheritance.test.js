import Hound from './implement-inheritance';
import Dog from '../task_4/add-methods';

describe('Name of the group', () => {
  const newHound =new  Hound('Snuppy', 'black', 4, 40)
  it('should be an instance of Dog', () => {
    expect(newHound instanceof Dog).toBe(true);
  });

  it('should have a height propery', () => {
    expect(newHound).toHaveProperty('height');
    expect(typeof newHound.height).toBe('number');
  });
});