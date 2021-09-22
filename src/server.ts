import express from "express";
import Connection from "./database/config";
import { UserRoutes, AuthRoutes, RoleRoutes } from "./routes";

class Server {
  private app;
  private port;
  private paths;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: "/api/auth",
      users: "/api/users",
      roles: "/api/roles",
    };

    // Database connected
    new Connection();

    // Middlewares
    this.middlewares();

    // Routes App
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(this.paths.users, UserRoutes);
    this.app.use(this.paths.auth, AuthRoutes);
    this.app.use(this.paths.roles, RoleRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on port : ", this.port);
    });
  }
}

export default Server;
