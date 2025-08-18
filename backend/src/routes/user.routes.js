import { Router } from "express";
import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/user.controller.js";
import { upload } from "../config/upload.js";
import { createUserValidator } from "../validators/userValidator.js";
import { validateRequest } from "../middlewares/validateRequest.js";
const router = Router();


router.post("/", upload.single("profile_image"), createUserValidator, validateRequest, createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", upload.single("profile_image"), updateUser);
router.delete("/:id", deleteUser);

export default router;
