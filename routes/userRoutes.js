import express from "express";
import {
  create,
  read,
  update,
  deleteUser,
} from "../controller/userController.js";
const route = express.Router();
route.post("/create", create);
route.get("/getUsers", read);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;
