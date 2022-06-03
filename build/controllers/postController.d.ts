import { Request, Response } from 'express';
export declare function getPosts(req: Request, res: Response): Promise<void>;
export declare function getPost(req: Request, res: Response): Promise<void>;
export declare function createPost(req: Request, res: Response): Promise<void>;
export declare function updatPost(req: Request, res: Response): Promise<void>;
export declare function deletePost(req: Request, res: Response): Promise<void>;
