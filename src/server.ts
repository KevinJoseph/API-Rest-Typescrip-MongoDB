import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'

import indexRoutes from './routes/indexRoutes'
import postRoutes from './routes/PostsRoutes'

class Server {

    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    async config(){
        //connection mongodb atlas
        const mongodb_atlas = process.env.URL_DATABASE;
        mongoose
            .connect(mongodb_atlas || process.env.MONGODB_URL)
            .then((db) => console.log("Connected to database"))
            .catch((err) => {
            console.error(`Error connecting to the database. \n${err}`);
            });
  
        
        //Settings
        this.app.set('port', process.env.PORT || 5000)

        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false})) // valida envio desde form
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        this.app.use(cors());
    }

    routes(){
        this.app.use(indexRoutes);  
        this.app.use('/api/post',postRoutes);    
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port:", this.app.get("port"))
        });
        this.app.use(morgan('dev'))
    }
}

export { Server } ;
