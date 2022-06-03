"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const PostsRoutes_1 = __importDefault(require("./routes/PostsRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            //connection mongodb atlas
            const mongodb_atlas = 'mongodb://vekjs:p131471483@cluster0-shard-00-00.yzzb4.mongodb.net:27017,cluster0-shard-00-01.yzzb4.mongodb.net:27017,cluster0-shard-00-02.yzzb4.mongodb.net:27017/db_notes?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
            mongoose_1.default
                .connect(mongodb_atlas || process.env.MONGODB_URL)
                .then((db) => console.log("Connected to database"))
                .catch((err) => {
                console.error(`Error connecting to the database. \n${err}`);
            });
            //Settings
            this.app.set('port', process.env.PORT || 5000);
            //Middlewares
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ extended: false })); // valida envio desde form
            this.app.use((0, morgan_1.default)('dev'));
            this.app.use((0, helmet_1.default)());
            this.app.use((0, cors_1.default)());
        });
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/post', PostsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port:", this.app.get("port"));
        });
        this.app.use((0, morgan_1.default)('dev'));
    }
}
exports.Server = Server;
