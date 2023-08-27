import { Document } from 'mongoose';
import { Peopole } from '../1userSchema';

export class Iuser extends Document{
  readonly username : string;

  readonly password: string;

  readonly referrals: Peopole[];

  readonly referuser: string;

  readonly email: string;

  readonly createdat: Date;
}

// export interface Iuser {
//   readonly username: string;

//   readonly password: string;

//   readonly referrals: User[];

//   readonly referuser: string;

//   readonly email: string;

//   readonly createdat: Date;
// }