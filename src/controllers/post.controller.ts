import { Request, Response } from "express";

export class PostController {
  GetPost(req: Request, res: Response) {
    res.status(200).json({
      post: "first post",
    });
  }
}
