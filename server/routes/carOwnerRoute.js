import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js";
import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";
import { addCar, deleteCar, getAllOwnedCars, getOwnedCar, updateCarDetails } from "../controllers/carOwnerController.js";


const router = express.Router();


//adminController.js
router.get("/getownedcar", authMiddleware,checkRoleMiddleware(["carOwner"]), getOwnedCar);
router.get("/getallownedcars", authMiddleware,checkRoleMiddleware(["carOwner"]), getAllOwnedCars);
router.post("/addcar", authMiddleware,checkRoleMiddleware(["carOwner"]), addCar);
router.delete("/deletecar", authMiddleware,checkRoleMiddleware(["carOwner"]), deleteCar);
router.put("/updatecardetails", authMiddleware,checkRoleMiddleware(["carOwner"]), updateCarDetails);



export default router;
