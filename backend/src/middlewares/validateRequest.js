import { validationResult } from "express-validator";

// ✅ Middleware to check validation errors and return 400 if any
export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
};