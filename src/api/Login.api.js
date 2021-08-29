const mockedUsers = [
  {
    id: '123',
    name: 'Wizeline',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  },
  {
    id: '6',
    name: 'Tono',
    avatarUrl:
      'https://avatars.githubusercontent.com/u/7376933?s=400&u=a9cfe9763d09edea21e3c02cb835e98384ec8195&v=4',
  },
];

export default async function LoginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUsers.find((user) => user.id === '123'));
      }
      if (username === 'tono' && password === 'pass') {
        return resolve(mockedUsers.find((user) => user.id === '6'));
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
