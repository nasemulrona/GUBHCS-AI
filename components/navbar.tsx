"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const Navbar = () => {
  const user = useAuth();
  const [open, setOpen] = useState(false);

  const notifications = [
    { id: 1, message: "New appointment received" },
    { id: 2, message: "Prescription uploaded" },
  ];

  const pathname = usePathname();
  const path = pathname
    ? pathname.split("/")[pathname.split("/").length - 1].replace(/-/g, " ")
    : "Overview";

  return (
    <div className="p-5 flex justify-between bg-white relative z-50">
      <h1 className="text-xl font-medium text-gray-500 capitalize">
        {path}
      </h1>

      <div className="flex items-center gap-4 relative">
        {/* 🔔 Notification Button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative focus:outline-none"
        >
          <Bell />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              {notifications.length}
            </span>
          )}
        </button>

        {/* 🔽 Dropdown (only shows if open = true) */}
        {open && (
          <div className="absolute right-10 top-8 w-64 bg-white border rounded-md shadow-md p-2 z-50">
            {notifications.map((note) => (
              <p
                key={note.id}
                className="text-sm p-2 hover:bg-gray-100 rounded cursor-pointer"
              >
                {note.message}
              </p>
            ))}
          </div>
        )}

        {/* 👤 User Profile Button */}
        {user?.userId && <UserButton />}
      </div>
    </div>
  );
};
