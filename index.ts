import express from "express";
import { PostRouter } from "./src/routes/post.route";
import { UserRouter } from "./src/routes/user.route";
// const express = require("express");

class Server {
  public app = (express.application = express());
  private port = 3030;

  constructor() {
    this.app.use(express.json());

    // this.app.use("/test", (req: any, res: any) => {
    //   res.status(200).json({
    //     message: "recived",
    //   });
    // });

    this.app.use("/api", this.Routes());

    this.Listen();
  }

  Listen() {
    this.app.listen(this.port, () => {
      console.log(`server on in ${this.port}`);
    });
  }

  Routes(): Array<express.Router> {
    return [new UserRouter().router, new PostRouter().router];
  }
}

new Server();
