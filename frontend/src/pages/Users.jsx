import { useState, useEffect, useMemo, useContext } from "react";
import {
  Plus,
  Download,
  RefreshCw,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserContext } from "@/context/UserContext";
import UserTable from "@/component/users/UserTable";
import UserForm from "@/component/users/UserForm";
import DeleteUserDialog from "@/component/users/DeleteUserDialog";

const Users = () => {
  const { users, loading, addUser, editUser, removeUser, reload } =
    useContext(UserContext);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);
  const [formLoading, setFormLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterPosition, setFilterPosition] = useState("all");
  const [sortNewest, setSortNewest] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 6;

  // --- Handlers ---
  const handleCreateUser = async (userData) => {
    setFormLoading(true);
    try {
      await addUser(userData);
      setShowAddModal(false);
    } finally {
      setFormLoading(false);
    }
  };

  const handleUpdateUser = async (userData) => {
    if (!editingUser) return;
    setFormLoading(true);
    try {
      await editUser(editingUser.id, userData);
      setEditingUser(null);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!deletingUser) return;
    setFormLoading(true);
    try {
      await removeUser(deletingUser.id);
      setDeletingUser(null);
    } finally {
      setFormLoading(false);
    }
  };

  const handleExportCSV = () => {
    const csvHeaders = ["Name", "Email", "Position", "Created At"];
    const csvData = users.map((u) => [
      u.name,
      u.email,
      u.position,
      new Date(u.created_at).toLocaleDateString(),
    ]);
    const csvContent = [csvHeaders, ...csvData]
      .map((r) => r.map((f) => `"${f}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `users-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Reload users on mount
  useEffect(() => {
    reload();
  }, [reload]);

  // --- Filter & Search ---
  const filteredUsers = useMemo(() => {
    let filtered = [...users];

    if (filterPosition !== "all")
      filtered = filtered.filter((u) => u.position === filterPosition);
    if (searchQuery)
      filtered = filtered.filter((u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (sortNewest)
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return filtered;
  }, [users, searchQuery, filterPosition, sortNewest]);

  // Reset page if filtered data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredUsers]);

  // --- Pagination ---
  const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen py-8 font-inter bg-[#FFFFFF]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#F97316]">
              User Management
            </h1>
            <p className="text-[#6B7280] text-md">
              Manage your users with CRUD operations
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={reload}
              disabled={loading}
              className="border border-[#E5E7EB] hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
            >
              <RefreshCw
                className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Button
              variant="outline"
              onClick={handleExportCSV}
              disabled={users.length === 0}
              className="border border-[#E5E7EB] hover:border-[#F97316] hover:bg-[#F97316]/5 transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button
              onClick={() => setShowAddModal(true)}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF] transition-all duration-300"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          {/* Search */}
          <div className="relative w-96 m:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-md border border-[#E5E7EB] bg-[#F3F4F6] text-[#111827] text-sm outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <select
              value={filterPosition}
              onChange={(e) => setFilterPosition(e.target.value)}
              className="border border-[#E5E7EB] rounded-md px-3 py-2 text-sm bg-[#F3F4F6] text-[#111827] focus:ring-1 focus:ring-[#2563EB]"
            >
              <option value="all">All Positions</option>
              {[...new Set(users.map((u) => u.position))].map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>

            <Button
              variant={sortNewest ? "default" : "outline"}
              onClick={() => setSortNewest(!sortNewest)}
              className={`text-sm px-3 py-2 rounded-md ${
                sortNewest
                  ? "bg-gradient-to-r from-[#2563EB] to-[#F97316] text-[#FFFFFF]"
                  : "border border-[#E5E7EB] text-[#111827] hover:bg-[#2563EB]/10"
              }`}
            >
              {sortNewest ? "Newest First" : "Sort by Newest"}
            </Button>
          </div>
        </div>

        {/* User Table */}
        <div className="space-y-4">
          <UserTable
            users={paginatedUsers}
            loading={loading}
            onEdit={setEditingUser}
            onDelete={setDeletingUser}
          />
        </div>

        {/* Pagination */}
        {filteredUsers.length > entriesPerPage && (
          <div className="flex justify-center items-center gap-3 mt-6">
            {/* Previous Button */}
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-auto px-4 h-10 rounded-full flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-110 hover:bg-[#2563EB]/10 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 text-[#2563EB]" />
              Previous
            </Button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 
          ${
            page === currentPage
              ? "bg-[#2563EB] text-white shadow-md animate-scale-in"
              : "hover:bg-[#2563EB]/10 text-[#2563EB]"
          }`}
              >
                {page}
              </Button>
            ))}

            {/* Next Button */}
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-auto px-4 h-10 rounded-full flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-110 hover:bg-[#2563EB]/10 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-5 h-5 text-[#2563EB]" />
            </Button>
          </div>
        )}

        {/* Add / Edit / Delete Dialogs */}
        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF]">
            <DialogHeader>
              <DialogTitle className="text-[#111827]">Add New User</DialogTitle>
            </DialogHeader>
            <UserForm
              onSubmit={handleCreateUser}
              onCancel={() => setShowAddModal(false)}
              loading={formLoading}
            />
          </DialogContent>
        </Dialog>

        <Dialog
          open={!!editingUser}
          onOpenChange={(open) => !open && setEditingUser(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF]">
            <DialogHeader>
              <DialogTitle className="text-[#111827]">Edit User</DialogTitle>
            </DialogHeader>
            {editingUser && (
              <UserForm
                user={editingUser}
                onSubmit={handleUpdateUser}
                onCancel={() => setEditingUser(null)}
                loading={formLoading}
              />
            )}
          </DialogContent>
        </Dialog>

        <DeleteUserDialog
          user={deletingUser}
          open={!!deletingUser}
          onOpenChange={(open) => !open && setDeletingUser(null)}
          onConfirm={handleDeleteUser}
          loading={formLoading}
        />
      </div>
    </div>
  );
};

export default Users;
