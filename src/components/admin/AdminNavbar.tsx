"use client";

import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdminNavbar = () => {
  return (
    <header className="fixed left-64 right-0 top-0 z-30 h-16 border-b bg-background">
      <div className="flex h-full items-center justify-between px-6">
        {/* Page Title */}
        <div>
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Notification */}
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>

            <div className="hidden sm:block">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-muted-foreground">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;