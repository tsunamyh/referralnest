import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Iuser } from "./interface/user.interface";
import { CreateUserDto } from "src/dto/createUser.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<Iuser>) { }

  async saveUser(createUserDto: CreateUserDto): Promise<Iuser | {}> {
    console.log("createUserDto:",createUserDto);
    // const newUser =  new this.userModel(createUserDto)
    // console.log("newUser",newUser); 
    // await newUser.save()
   
    if (createUserDto.referuser && !await this.existReffer(createUserDto.referuser)) {
      return {
        message: "referuser not exist in DataBase"
      }
    }
    try {
      const savedUser = await this.userModel.create(createUserDto)
      if (createUserDto.referuser) {
        try {
          await this.userModel.findOneAndUpdate({
            username: createUserDto.referuser
          }, { "$push": { referrals: savedUser._id } }); 
        } catch (error) {
          console.log("error:", error);
          return {
            message: error.message
          }
        }   
      }

      console.log("savedUser", savedUser);
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

  async getRefs(username: string): Promise<Iuser[] | {}> {
    try {
      const refs = await this.userModel.findOne({ username })
        .populate("referrals")
      // .exec()
      console.log("refs:", refs);
      return refs
    } catch (error) {
      return {
        message: "Can NOT get referrals users"
      }
    }
  }

  async existReffer(refferUser: string): Promise<Iuser | null> {
    const existUser = await this.userModel.findOne({ referuser: refferUser })
    console.log("existUser:",existUser);
    return existUser
  }
}