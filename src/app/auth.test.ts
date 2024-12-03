import { describe, it, expect, beforeEach } from 'vitest';
import { addUser, findUserByEmail, validateLogin, clearUsers } from '././utils/db';

describe('User Registration', () => {
  beforeEach(() => {
    clearUsers();
  });

  it('should register a user with valid data', () => {
    const user = { id: '1', name: 'John Doe', email: 'john@example.com', password: 'password123' };
    addUser(user);
    const foundUser = findUserByEmail('john@example.com');
    expect(foundUser).toMatchObject({
      name: 'John Doe',
      email: 'john@example.com',
    });
  });

  it('should not register a user with a duplicate email', () => {
    const user = { id: '1', name: 'Jane Doe', email: 'jane@example.com', password: 'password123' };
    addUser(user);
    expect(() => addUser(user)).toThrow('Email already in use');
  });

  it('should not register a user with a short password', () => {
    const user = { id: '1', name: 'Short Password', email: 'short@example.com', password: 'short' };
    expect(() => addUser(user)).toThrow('Password must be at least 8 characters long');
  });
});

describe('User Login', () => {
  beforeEach(() => {
    clearUsers();
  });

  it('should login with correct credentials', () => {
    const user = { id: '1', name: 'John Doe', email: 'john@example.com', password: 'password123' };
    addUser(user);
    const foundUser = validateLogin('john@example.com', 'password123');
    expect(foundUser).toMatchObject({
      email: 'john@example.com',
    });
  });

  it('should not login with incorrect credentials', () => {
    const user = { id: '1', name: 'Jane Doe', email: 'jane@example.com', password: 'password123' };
    addUser(user);
    expect(() => validateLogin('jane@example.com', 'wrongpassword')).toThrow('Invalid email or password');
  });

  it('should not login with an unregistered email', () => {
    expect(() => validateLogin('unknown@example.com', 'password123')).toThrow('Invalid email or password');
  });
});