import express from "express";
import Connection from "./database/config";
import {
  UserRoutes,
  AuthRoutes,
  RoleRoutes,
  CategorieRoutes,
  BusinessRoutes,
  SubcategorieRoutes,
} from "./routes";

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
      categories: "/api/categories",
      business: "/api/business",
      subcategories: "/api/subcategories",
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
    this.app.use(this.paths.categories, CategorieRoutes);
    this.app.use(this.paths.business, BusinessRoutes);
    this.app.use(this.paths.subcategories, SubcategorieRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on port : ", this.port);
    });
  }
}

export default Server;
