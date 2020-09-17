import { Router } from "express";
// Middlewares
import auth from "./app/middlewares/auth";
// Controllers
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import TaskController from "./app/controllers/TaskController";

const routes = Router();

routes.get("/", (_, res) => {
  return res.send("Bem-vindo a primeira pagina da API");
});

//User
routes.post("/users", auth, UserController.store);
routes.post("/sessions", SessionController.store);
routes.get("/autorizado", auth, SessionController.show);

// Task
routes.get("/tasks", auth, TaskController.index);
routes.get("/tasks/:id", TaskController.show);
routes.post("/tasks", TaskController.store);
routes.put("/tasks/:id", TaskController.update);
routes.delete("/tasks/:id", TaskController.destroy);

export default routes;
