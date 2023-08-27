import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Peopole {
  @Prop({ required: true , trim: true })
  username: string;

  @Prop({ required: true, trim: true })
  password: string;

  @Prop({type:[{ type: mongoose.Schema.Types.ObjectId, ref: "user" }], trim: true})
  referrals: mongoose.Schema.Types.ObjectId[];

  @Prop({ default: "Company" })
  referuser: string;

  @Prop({ required: true, trim: true })
  email: string;

  @Prop({ default: new Date() })
  createdat: Date;
}

export const UserSchema = SchemaFactory.createForClass(Peopole)
