import { IUser } from "../models/users"; // path from types folder to users.ts

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
