"use client";

import AuthProvider from "@/context/auth/AuthProvider";
import Navbar from "@/layouts/Navbar";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        {children}
      </AuthProvider>
    </>
  );
};

export default Provider;
