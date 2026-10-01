import { ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />

      <AdminNavbar />

      <main className="ml-64 pt-16">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;