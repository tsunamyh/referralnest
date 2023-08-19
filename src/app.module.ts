import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/1userSchema';
import { ConfigModule } from '@nestjs/config';
// import dotenv from "dotenv"


// dotenv.config()
@Module({
  imports: [
    ConfigModule.forRoot({      isGlobal: true, envFilePath: `${process.env.NODE_ENV}.env` }),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/refusernest"),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
