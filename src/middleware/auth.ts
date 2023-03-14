import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user';

export default function createToken(data: User) {
  const secret = 'segredinho';
  const config: object = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data }, secret, config);
  return token;
}
