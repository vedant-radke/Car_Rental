import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { addCar, changeUserRole, getAllCars, getAllUsers } from "../controllers/adminController.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";


const router = express.Router();


//adminController.js
router.get("/getallusers", authMiddleware,checkRoleMiddleware(["admin"]), getAllUsers);
router.post('/change-role', authMiddleware,checkRoleMiddleware(["admin"]), changeUserRole);
router.get('/getallcars', authMiddleware,checkRoleMiddleware(["admin"]), getAllCars);
router.post('/addcar', authMiddleware,checkRoleMiddleware(["admin"]), addCar);


export default router;
