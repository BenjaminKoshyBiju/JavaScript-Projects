import express from "express";
import todoController from "../controllers/todoController.js";
const router=express.Router();
router.get("/todos",todoController.getalltodos);
export default router;