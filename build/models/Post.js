"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const PostSchema = new mongoose_1.Schema({
    author: String,
    title: String,
    tag: String,
    content: String
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Post', PostSchema);
