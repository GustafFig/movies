import { add } from '../services/index';

describe('ok', () => {
  it('should execute add', () => {
    expect(add(1)).toEqual(3);
  });
});
