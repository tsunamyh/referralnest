import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({type:[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]})
  referrals: mongoose.Schema.Types.ObjectId[];

  @Prop({ default: "Company" })
  referuser: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: new Date() })
  createdat: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)
