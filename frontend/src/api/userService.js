
import api from "./api";

// ✅ Get all users (with optional query params)
export const getUsers = async (params) => {
    const res = await api.get("/users", { params });
    return res.data;
};

// ✅ Create user with image
export const createUser = async (formData) => {
    const res = await api.post("/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
};
// export const createUser = async (formData) => {
//     const res = await api.post("/users", formData); // 👈 no need to set headers
//     return res.data;
// };

// ✅ Update user with image
export const updateUser = async (id, formData) => {
    const res = await api.put(`/users/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
};

// ✅ Delete user
export const deleteUser = async (id) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
};

// ✅ Get single user
export const getUser = async (id) => {
    const res = await api.get(`/users/${id}`);
    return res.data;
};
