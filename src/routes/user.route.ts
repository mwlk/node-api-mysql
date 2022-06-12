import { UserController } from "../controllers/user.controller";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get("/user", (req, res) => {
      this.controller.GetUsers(req, res);
    });

    this.router.post("/register", (req, res) => {
      this.controller.RegisterUser(req, res);
    });

    this.router.post("/login", (req, res) => {
      this.controller.LoginUser(req, res);
    });
  }
}
