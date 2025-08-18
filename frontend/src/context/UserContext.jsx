import { createContext, useState, useEffect, useCallback } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userService";

// ✅ Create a UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // state for user list
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  // ✅ Fetch all users
  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUsers();
      setUsers(data.users || []);
    } catch (err) {
      setError(err.message || "❌ Failed to fetch users");
      console.error("❌ Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  // ✅ Create new user
  const addUser = async (formData) => {
    try {
      await createUser(formData);
      loadUsers();
    } catch (err) {
      setError(err.message || "❌ Failed to create user");
    }
  };

  // ✅ Update existing user
  const editUser = async (id, formData) => {
    try {
      await updateUser(id, formData);
      loadUsers();
    } catch (err) {
      setError(err.message || "❌ Failed to update user");
    }
  };

  // ✅ Delete user
  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (err) {
      setError(err.message || "❌ Failed to delete user");
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        addUser,
        editUser,
        removeUser,
        reload: loadUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
