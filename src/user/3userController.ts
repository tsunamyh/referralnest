import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from './2userService';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userservice: UserService){}

  @Post()
  insertUser(@Res() res: Response,@Body() createUserDto : CreateUserDto ){
    try {
      const newUser = this.userservice.saveUser(createUserDto)
      res.status(201).json({
        "message":"User saved!!",
        "newUser": newUser
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}