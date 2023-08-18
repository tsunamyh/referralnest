import { PartialType } from '@nestjs/mapped-types';
import { CreatUserDto } from './createUser.dto';
export class UpdateStudentDto extends PartialType(CreatUserDto) {}