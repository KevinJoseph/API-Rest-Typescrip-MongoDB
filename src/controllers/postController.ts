import { Request, Response } from 'express';
import Post, { IPost } from '../models/Post';

export async function getPosts(req: Request, res: Response) {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.status(500).json({ status: 500 })
    }
}

export async function getPost(req: Request, res: Response) {
    try {
        const { id } = req.params
        const post = await Post.findOne({ _id: id })
        res.json(post)
    } catch (error) {
        res.status(500).json({ status: 500 })
    }
}

export async function createPost(req: Request, res: Response) {
    try {
        const { author, title, tag, content } = req.body
        const newPost: IPost = new Post({ author, title, tag, content})
        await newPost.save()
        console.log(newPost)
        res.json(newPost)
    } catch (error) {
        res.status(500).json({ status: 500 })
    }
}

export async function updatPost(req: Request, res: Response) {
    try {
        const { id } = req.params
        const post = await Post.findOneAndUpdate({ _id: id }, req.body)
        res.json(post)
    } catch (error) {
        res.status(500).json({ status: 500 })
    }
}

export async function deletePost(req: Request, res: Response) {
    try {
        const { id } = req.params
        const post = await Post.findOneAndDelete({ _id: id })
        res.json(post)
    } catch (error) {
        res.status(500).json({ status: 500 })
    }
}