import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Iuser } from "./interface/user.interface";
import { CreateUserDto } from "src/dto/createUser.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<Iuser>) { }

  async saveUser(createUserDto: CreateUserDto): Promise<Iuser | {}> {
    console.log(createUserDto);

    // const newUser =  new this.userModel(createUserDto)
    // console.log("newUser",newUser); 
    // await newUser.save()
    try {
      const savedUser = await this.userModel.create(createUserDto)
      console.log("savedUser", savedUser);
      if (createUserDto.referuser) {
        try {
          const populated = await this.userModel.findOneAndUpdate({
            username: createUserDto.referuser
          }, { "$push": { referrals: savedUser._id } },
            { new: true })
          console.log('populated:', populated);

          return populated
        } catch (error) {
          console.log("error:", error);

          return {
            message: error.message
          }
        }
      }
      return savedUser
    } catch (error) {
      console.log("error(create):", error);
      return {
        message: error.message
      }
    }
  }

  async deleteAllUsers(): Promise<object> {
    try {
      const deleted = await this.userModel.deleteMany({})
      console.log(deleted);
      return {
        message: "MongoDB deleted",
        deletedCount: deleted.deletedCount
      }

    } catch (error) {
      return {
        message: error.message
      }
    }
  }

  async getAllUsers(): Promise<Iuser[] | {}> {
    try {
      const users = await this.userModel.find();
      return users
    } catch (error) {
      return {
        message: "Can NOT get all users"
      }
    }
  }
}