import User from "../models/User.js";

// ✅ Create user
export const createUser = async (req, res) => {
    try {
        const { name, email, position, } = req.body;
        const image = req.file ? req.file.path : null;

        // ✅ Require only name, email, and position (image optional)
        if (!name || !email || !position) {
            return res.status(400).json({
                message: "❌ Name, email, and position are required"
            });
        }

        const user = await User.create({ name, email, position, image });

        res.status(201).json({
            message: "✅ User created successfully",
            user,
        });
    } catch (err) {
        res.status(400).json({
            message: "❌ Failed to create user", error: err.message
        });
    }
};


// ✅ Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json({
            message: "✅ Users fetched successfully",
            total: users.length,
            users,
        });
    } catch (err) {
        res.status(500).json({
            message: "❌ Failed to fetch users", error: err.message
        });
    }
};

// ✅ Get single user
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user)
            return res.status(404).json({ message: "❌ User not found" });

        res.json({
            message: "✅ User fetched successfully",
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: "❌ Failed to fetch user", error: err.message
        });
    }
};

// ✅ Update user
export const updateUser = async (req, res) => {
    try {
        const { name, email, position } = req.body;
        const image = req.file ? req.file.path : undefined;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, position, ...(image && { image }) },
            { new: true }
        );

        if (!user)
            return res.status(404).json({ message: "❌ User not found" });

        res.json({
            message: "✅ User updated successfully",
            user,
        });
    } catch (err) {
        res.status(400).json({
            message: "❌ Failed to update user", error: err.message
        });
    }
};

// ✅ Delete user
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user)
            return res.status(404).json({ message: "❌ User not found" });

        res.json({
            message: "✅ User deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: "❌ Failed to delete user", error: err.message
        });
    }
};
