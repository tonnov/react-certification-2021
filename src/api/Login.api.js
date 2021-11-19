const mockedUsers = [
  {
    id: '123',
    name: 'Wizeline',
    username: 'wizeline',
    password: 'Rocks!',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  },
  {
    id: '6',
    name: 'Tono',
    username: 'tono',
    password: 'pass',
    avatarUrl:
      'https://avatars.githubusercontent.com/u/7376933?s=400&u=a9cfe9763d09edea21e3c02cb835e98384ec8195&v=4',
  },
];

export default async function LoginApi(userName, passWord) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isUser = mockedUsers.find((user) => user.username === userName);

      if (isUser && isUser.password === passWord) {
        const { username, password, ...user } = isUser;
        resolve(user);
      } else reject(new Error('Username or password invalid'));
    }, 500);
  });
}
