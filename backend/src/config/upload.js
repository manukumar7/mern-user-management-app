import multer from "multer";
import path from "path";

// ✅ Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload"); // save inside uploads folder (make sure folder exists)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // unique filename
    },
});

// ✅ File filter for only PNG & JPEG (check extension + mimetype)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("❌ Only .png, .jpg and .jpeg images are allowed!"), false);
    }
};

// ✅ Multer upload middleware with file size limit (5 MB)
export const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // ✅ 5 MB in bytes
    },
});


// 1 MB = 1024 * 1024 bytes
// 5 MB = 5 * 1024 * 1024 = 5242880 bytes