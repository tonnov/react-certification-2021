import LoginApi from './Login.api';

describe('Mocked Login Api', () => {
  it('should return an object with user data', async () => {
    const userName = 'tono';
    const passWord = 'pass';
    const solvedUser = await LoginApi(userName, passWord);
    expect(solvedUser.id).toBe('6');
  });
});
