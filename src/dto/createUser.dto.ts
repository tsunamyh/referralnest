import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Peopole } from "src/user/1userSchema";

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(30)
  @IsString()
  readonly username : string;
  
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly password: string;
  
  // @IsNotEmpty()
  // readonly referrals: User[];
  
  // @IsString()
  readonly referuser: string;
  
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  
  // @IsNotEmpty()
  // readonly createdat: Date;
}

// export class USER {
//   @IsNotEmpty()
//   @MaxLength(30)
//   @IsString()
//   readonly username: string;
//   @IsString()
//   @MaxLength(30)
//   @IsNotEmpty()
//   readonly password: string;

//   refuser?: string
// }