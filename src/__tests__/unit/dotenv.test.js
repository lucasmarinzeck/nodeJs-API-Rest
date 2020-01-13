require('dotenv').config();

describe('Test to dotenv module', () =>{
  it('should be port 3000', () => {
  expect(process.env.PORT).toBe('3000');
  });
});