import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import toast from "react-hot-toast";
import { AlertTriangle, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DeleteUserDialog = ({ user, open, onOpenChange }) => {
  const { removeUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await removeUser(user._id); // ✅ Call delete API via context
      toast.success(" User deleted successfully");
      onOpenChange(false); // close dialog
    } catch {
      toast.error("❌ Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-md bg-[#FFFFFF]">
        <AlertDialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 bg-[#DC26262E] rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-[#DC2626]" />
            </div>
            <div>
              <AlertDialogTitle className="text-left text-[#111827] font-bold">
                Delete User
              </AlertDialogTitle>
              <AlertDialogDescription className="text-left text-[#6B7280]">
                This action cannot be undone.
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-[#F3F4F680] rounded-lg">
            <Avatar className="w-12 h-12">
              {user.profile_image ? (
                <AvatarImage
                  src={user.profile_image}
                  alt={user.name}
                  className="object-cover"
                />
              ) : (
                <AvatarFallback className="bg-gradient-to-r from-[#2563EB] to-[#F97316] text-[#FFFFFF]">
                  {getInitials(user.name)}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="font-medium text-[#111827]">{user.name}</p>
              <p className="text-sm text-[#6B7280]">{user.email}</p>
              <p className="text-sm text-[#6B7280]">{user.position}</p>
            </div>
          </div>

          <div className="p-4 bg-[#DC26262E] border border-[#DC262620] rounded-lg">
            <p className="text-sm text-[#DC2626]">
              <strong>Warning:</strong> This will permanently delete the user
              account and all associated data. This action cannot be undone.
            </p>
          </div>
        </div>

        <AlertDialogFooter className="gap-2">
          <AlertDialogCancel
            disabled={loading}
            className="border border-[#E5E7EB] px-4 py-2 rounded-lg hover:bg-[#F3F4F6] transition-all duration-300"
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-[#DC2626] text-[#FFFFFF] px-4 py-2 rounded-lg flex items-center justify-center hover:bg-[#DC2626E6] transition-all duration-300"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-[#FFFFFF50] border-t-[#FFFFFF] rounded-full animate-spin mr-2" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete User
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteUserDialog;
