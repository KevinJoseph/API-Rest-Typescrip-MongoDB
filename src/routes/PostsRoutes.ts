import {Request, Response, Router} from 'express'
import * as postController from '../controllers/postController'

class PostRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/', postController.getPosts);
        this.router.get('/:id',postController.getPost);
        this.router.post('/', postController.createPost);
        this.router.put('/:id',postController.updatPost);
        this.router.delete('/:id', postController.deletePost);
    }
}

const postRoutes = new PostRoutes();

export default  postRoutes.router;