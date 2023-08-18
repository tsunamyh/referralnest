import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import dotenv from "dotenv"
import { UserSchema } from './user/1userSchema';

dotenv.config()
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: 'refusers' }),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
