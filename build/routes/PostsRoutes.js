"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PostRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getPosts(req, res) {
        res.send('Posts');
    }
    getPost() {
    }
    createPost() {
    }
    updatePost() {
    }
    deletePost() {
    }
    routes() {
        this.router.get('/posts', this.getPosts);
        this.router.get('/posts/:url', this.getPost);
        this.router.post('/posts', this.createPost);
        this.router.put('/posts/:url', this.updatePost);
        this.router.delete('/posts/:url', this.deletePost);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
