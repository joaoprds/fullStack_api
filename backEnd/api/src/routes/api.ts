import { Router } from "express";
import * as UserController from "../Controllers/userController";

const router = Router();

// Create routes to GET method //
router.get("/products", UserController.all);
router.get("/products/:id", UserController.one);

// Create routes to POST method //
router.post("/products", UserController.create);
router.post("/login", UserController.login);

// Create routes to PUT method //
router.put("/products/:id", UserController.editUser);

// Create routes to DELETE method //
router.delete("/products/:id", UserController.deleteUser);

export { router };
