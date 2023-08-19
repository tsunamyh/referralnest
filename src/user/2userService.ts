import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema } from "mongoose";
import { Iuser } from "./interface/user.interface";
import { CreateUserDto } from "src/dto/createUser.dto";

@Injectable()
export class UserService{
  constructor(@InjectModel('User') private userModel : Model<Iuser> ){}
  
  async saveUser(createUserDto:CreateUserDto) : Promise<Iuser>{

    const newUser =  new this.userModel(createUserDto)
    console.log("newUser",newUser);
    
    const savedUser = await this.userModel.create({...newUser})
    if (createUserDto.refuser) {
      const populated = this.userModel.findOneAndUpdate({
        username: createUserDto.refuser },{"$push": { referrals: savedUser._id }},
        {new : true})
        // return populated
    }
    return savedUser
  }
}