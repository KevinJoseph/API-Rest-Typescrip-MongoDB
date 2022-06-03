import { Schema, model, Document } from 'mongoose'

export interface IPost extends Document{
    author: string,
    title: string,
    tag: string,
    content: string
};

const PostSchema = new Schema({
    author: String,
    title: String,
    tag: String,
    content: String
},{
    timestamps: true,
    versionKey: false
});

export default model<IPost>('Post', PostSchema);