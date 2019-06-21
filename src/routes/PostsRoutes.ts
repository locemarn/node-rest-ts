import { Request, Response, Router } from 'express'

class PostRoutes {
  router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }

  getPosts(req: Request, res: Response) {
    res.send('Posts')
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
    this.router.get('/posts', this.getPosts)
    this.router.get('/posts/:url', this.getPost)
    this.router.post('/posts', this.createPost)
    this.router.put('/posts/:url', this.updatePost)
    this.router.delete('/posts/:url', this.deletePost)
  }
}

const postRoutes = new PostRoutes()
export default postRoutes.router