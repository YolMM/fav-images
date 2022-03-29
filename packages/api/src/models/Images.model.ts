import mongoose, { Document, Schema } from 'mongoose';

export interface fImages extends Document {
    title: String,
    img: String,
}

const schema = new Schema({
  title: { type: String, require: true },
  img: { type: String, require: true },
});

export const Images = mongoose.model<fImages>('Images', schema);
