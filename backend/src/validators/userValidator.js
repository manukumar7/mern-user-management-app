import { body } from "express-validator";

// Validation rules for creating a user
export const createUserValidator = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email address")
];
