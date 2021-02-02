export default class Api {
  static _usersPasswords = [
    {
      email: 's',
      password: 's',
    },
    {
      email: 'sincere@april.biz',
      password: 'qwerty',
    },
    {
      email: 'shanna@melissa.tv',
      password: 'qwerty2',
    },
    {
      email: 'nathan@yesenia.net',
      password: 'qwerty3',
    },
    {
      email: 'julianne.OConner@kory.org',
      password: 'qwerty4',
    },
    {
      email: 'lucio_Hettinger@annie.ca',
      password: 'qwerty5',
    },
    {
      email: 'karley_Dach@jasper.info',
      password: 'qwerty6',
    },
    {
      email: 'telly.Hoeger@billy.biz',
      password: 'qwerty7',
    },
    {
      email: 'sherwood@rosamond.me',
      password: 'qwerty8',
    },
    {
      email: 'chaim_McDermott@dana.io',
      password: 'qwerty9',
    },
    {
      email: 'rey.Padberg@karina.biz',
      password: 'qwerty10',
    },
  ];
  static email = '';
  static getUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      let data = await response.json();
      return data.filter((user) => user.email !== Api.email.toLowerCase());
    } catch (e) {
      console.log(e);
    }
  };
  static login = (email, password) => {
    for (let user of Api._usersPasswords) {
      if (
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
      ) {
        Api.email = email.toLowerCase();
        return true;
      }
    }
    return false;
  };
}
