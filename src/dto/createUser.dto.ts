import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { User } from "src/user/1userSchema";

export class CreatUserDto {
  @IsNotEmpty()
  @MaxLength(30)
  @IsString()
  readonly username : string;
  
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly password: string;
  
  @IsNotEmpty()
  readonly referrals: User[];
  
  @IsString()
  @IsNotEmpty()
  readonly refuser: string;
  
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  
  @IsNotEmpty()
  readonly createdat: Date;
}