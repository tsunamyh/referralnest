import { MongooseModule } from "@nestjs/mongoose";
import { UserService } from "./2userService";
import { UserController } from "./3userController";
import { UserSchema } from "./1userSchema";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/refusernest"),
    MongooseModule.forFeature([{ name: "user", schema: UserSchema }]) //mongoose.model("User", userSchema)
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }