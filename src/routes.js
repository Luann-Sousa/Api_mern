const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");

routes.get("/users", UserController.index);
routes.post("/api/usuarios", UserController.store);
routes.put("/api/usuarios/:user_id", UserController.update);
routes.delete("/api/usuarios/:user_id", UserController.delete);

//rotas produtos 
routes.get("/products", ProductController.index);

module.exports = routes;