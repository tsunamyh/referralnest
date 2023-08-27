import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/4userModule';
// import dotenv from "dotenv"


// dotenv.config()
@Module({
  imports: [
    // ConfigModule.forRoot({isGlobal: true, envFilePath: `${process.env.NODE_ENV}.env` }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
