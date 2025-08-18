import { Edit, Trash2, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LazyAvatar from "@/components/ui/lazy-avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/utils";

const UserTableSkeleton = () => (
  <>
    {Array.from({ length: 5 }).map((_, index) => (
      <TableRow key={index}>
        <TableCell>
          <div className="flex items-center space-x-3">
            <Skeleton className="w-10 h-10 rounded-full bg-[#F3F4F6] animate-pulse-soft" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-32 bg-[#F3F4F6] animate-pulse-soft" />
              <Skeleton className="h-3 w-24 bg-[#F3F4F6] animate-pulse-soft" />
            </div>
          </div>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-20 bg-[#F3F4F6] animate-pulse-soft" />
        </TableCell>
        <TableCell className="hidden md:table-cell">
          <Skeleton className="h-4 w-16 bg-[#F3F4F6] animate-pulse-soft" />
        </TableCell>
        <TableCell className="hidden lg:table-cell">
          <Skeleton className="h-4 w-24 bg-[#F3F4F6] animate-pulse-soft" />
        </TableCell>
        <TableCell>
          <div className="flex space-x-2">
            <Skeleton className="h-8 w-16 bg-[#F3F4F6] animate-pulse-soft" />
            <Skeleton className="h-8 w-16 bg-[#F3F4F6] animate-pulse-soft" />
          </div>
        </TableCell>
      </TableRow>
    ))}
  </>
);

const UserTable = ({ users, loading = false, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div
        className="rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] shadow-app-sm overflow-hidden 
                hover:shadow-app-md transition-all duration-300 font-inter"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F3F4F6] text-[#111827]">
              <TableHead>User</TableHead>
              <TableHead>Position</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden lg:table-cell">Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[#111827]">
            <UserTableSkeleton className="bg-[#F3F4F6] text-[#6B7280]" />
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div
      className="rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] shadow-app-sm overflow-hidden 
                hover:shadow-app-md transition-all duration-300 font-inter"
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F3F4F6] text-[#111827]">
            <TableHead>User</TableHead>
            <TableHead>Position</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden lg:table-cell">Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center py-12 text-[#6B7280]"
              >
                <div className="flex flex-col items-center space-y-3">
                  <UserIcon className="w-12 h-12 text-[#6B7280]" />
                  <p>No users found</p>
                  <p className="text-sm">Try adjusting your search filters</p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-[#F3F4F6] transition-all duration-300 hover:shadow-app-sm group"
              >
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <LazyAvatar
                      src={user.profile_image}
                      alt={user.name}
                      name={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-[#111827] group-hover:text-[#2563EB] transition-colors">
                        {user.name}
                      </p>
                      <p className="text-sm text-[#6B7280]">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className="font-medium bg-[#6B7280] text-[#FFFFFF] hover:bg-[#F97316] 
                                transition-colors px-1 py-1 rounded"
                  >
                    {user.position}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse-soft"></div>
                    <span className="text-sm text-[#6B7280]">Active</span>
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell text-sm text-[#6B7280]">
                  {formatDate(user.created_at)}
                  {/* {formatDate(user.created_at)} */}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-6">
                    <Button
                      onClick={() => onEdit(user)}
                      className="border border-[#E5E7EB] text-[#111827] px-2 py-1 rounded 
                             transition-all duration-300 hover:border-[#2563EB] 
                             hover:shadow-app-sm hover:scale-105"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => onDelete(user)}
                      className="border border-[#E5E7EB] text-[#111827] px-2 py-1 rounded 
                             transition-all duration-300 hover:border-[#DC2626] 
                             hover:text-[#DC2626] hover:shadow-app-sm hover:scale-105"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
