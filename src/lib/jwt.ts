import { sign, verify, JwtPayload } from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

export const generateJWT = (payload: any): string => {
  return sign(payload, JWT_SECRET_KEY as string, {
    expiresIn: '1d',
  });
};

export const verifyJWT = (token: string) => {
  try {
    return verify(token, JWT_SECRET_KEY as string) as JwtPayload;
  } catch (error) {
    return { error: true };
  }
};
