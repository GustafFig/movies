import { add } from '../services/index';

describe('should add to test github workflow with actions', () => {
  it('should execute add', () => {
    expect(add(1)).toEqual(3);
  });
	it('should execute add', () => {
    expect(add(1, 4)).toEqual(5);
  });
});
