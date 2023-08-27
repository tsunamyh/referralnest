import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './2userService';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userservice: UserService){}

  @Post()
  async insertUser(@Res() res: Response,@Body() createUserDto : CreateUserDto ){
    try {
      const newUser = await this.userservice.saveUser(createUserDto)
      res.status(201).json({
        "message":"User saved!!",
        "newUser": newUser
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  @Get()
  async getUsers(){
    return await this.userservice.getAllUsers()
  }

  @Delete('delete')
  async deleteUser(){
    return await this.userservice.deleteAllUsers()
  }

  @Get(':name')
  async getReferalls(@Param("name") username:string) {
    console.log(username);
    
    return await this.userservice.getRefs(username)
  }
}