// import express from "express";
const express = require("express");

class Server {
  public app = (express.Application = express());
  private port = 3030;

  constructor() {
    this.app.use(express.json());
    this.app.use("/test", (req: any, res: any)=>{
        console.log("recived request")
    })

    this.Listen();
  }

  Listen() {
    this.app.listen(this.port, () => {
      console.log(`server on in ${this.port}`);
    });
  }
}

new Server();
