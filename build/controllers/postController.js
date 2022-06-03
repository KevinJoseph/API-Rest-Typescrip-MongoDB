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
exports.deletePost = exports.updatPost = exports.createPost = exports.getPost = exports.getPosts = void 0;
const Post_1 = __importDefault(require("../models/Post"));
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const posts = yield Post_1.default.find();
            res.json(posts);
        }
        catch (error) {
            res.status(500).json({ status: 500 });
        }
    });
}
exports.getPosts = getPosts;
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const post = yield Post_1.default.findOne({ _id: id });
            res.json(post);
        }
        catch (error) {
            res.status(500).json({ status: 500 });
        }
    });
}
exports.getPost = getPost;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { author, title, tag, content } = req.body;
            const newPost = new Post_1.default({ author, title, tag, content });
            yield newPost.save();
            console.log(newPost);
            res.json(newPost);
        }
        catch (error) {
            res.status(500).json({ status: 500 });
        }
    });
}
exports.createPost = createPost;
function updatPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const post = yield Post_1.default.findOneAndUpdate({ _id: id }, req.body);
            res.json(post);
        }
        catch (error) {
            res.status(500).json({ status: 500 });
        }
    });
}
exports.updatPost = updatPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const post = yield Post_1.default.findOneAndDelete({ _id: id });
            res.json(post);
        }
        catch (error) {
            res.status(500).json({ status: 500 });
        }
    });
}
exports.deletePost = deletePost;
