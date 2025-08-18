import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from 'express-rate-limit'
// import mongoSanitize from "express-mongo-sanitize";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// ✅ Sanitize user input to prevent NoSQL injection
// app.use(mongoSanitize());


// ✅ Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));

// ✅ Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "./upload")));


// ✅ Allow frontend (localhost:3000) to access backend
app.use(cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Protect API from abuse: limits number of requests per IP per time window
const crudLimiter = rateLimit({
    windowMs: process.env.RATE_LIMIT_WINDOW ? Number(process.env.RATE_LIMIT_WINDOW) : 15 * 60 * 1000, // 15 min
    max: process.env.RATE_LIMIT_MAX ? Number(process.env.RATE_LIMIT_MAX) : 50, // max requests
    message: "Too many requests, please try again later."
});
app.use("/api/v1/users", crudLimiter);


// ✅ Secure HTTP headers to protect against XSS, clickjacking, etc.
app.use(helmet());

// Routes
app.use("/api/v1/users", userRoutes);

// Start Server after DB connects
connectDB().then(() => {
    app.listen(PORT, () =>
        console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
});
