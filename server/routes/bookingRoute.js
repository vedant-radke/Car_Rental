import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js";
// import checkRoleMiddleware from "../middlewares/checkRoleMiddleware.js";
import { booked } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/booked", authMiddleware, booked);



export default router;