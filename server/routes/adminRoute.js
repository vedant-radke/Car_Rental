import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getAllUsers } from "../controllers/adminController.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";


const router = express.Router();


//adminController.js
router.get("/getallusers", authMiddleware,checkRoleMiddleware(["admin"]), getAllUsers);


export default router;
