import { PostController } from "../controllers/post.controller";
import { BaseRouter } from "./router";

export class PostRouter extends BaseRouter<PostController> {
  constructor() {
    super(PostController);
  }

  routes(): void {
    this.router.get("/post", (req, res) => {
      this.controller.GetPost(req, res);
    });
  }
}
