import {Document} from 'mongoose';
import { User } from '../1userSchema';

export class Iuser extends Document{
  readonly username : string;
  
  readonly password: string;

  readonly referrals: User[];

  readonly refuser: string;

  readonly email: string;

  readonly createdat: Date;
}