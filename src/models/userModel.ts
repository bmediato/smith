import { ResultSetHeader } from 'mysql2';
import { NewUser, User } from '../interfaces/user';
import connection from './connection';

export default async function create(user:NewUser): Promise<User> {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users 
    (username, vocation, level, password) VALUES (?, ?, ?, ?)`;

  const value = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, value);
  const { insertId: id } = result;

  const newUser: User = { id, username, vocation, level, password };
  return newUser;
}