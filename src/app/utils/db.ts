interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }
  
  let users: User[] = [];
  
  export const addUser = (user: User) => {
    if (user.password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }
  
    const existingUser = findUserByEmail(user.email);
    if (existingUser) {
      throw new Error('Email already in use');
    }
  
    users.push(user);
  };
  
  export const findUserByEmail = (email: string): User | undefined => {
    return users.find(user => user.email === email);
  };
  
  export const validateLogin = (email: string, password: string): User => {
    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }
    return user;
  };
  
  export const clearUsers = () => {
    users = [];
  };