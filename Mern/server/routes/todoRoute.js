import express from "express";
import todoController from "../controllers/todoController.js";
const router=express.Router();
router.get("/todos",todoController.getalltodos);
router.post("/todos",todoController.addNewtodo);
router.get("/todos",todoController.getnewtodo);
export default router;