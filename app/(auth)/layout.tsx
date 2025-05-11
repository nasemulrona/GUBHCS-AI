import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Left Side - Authentication Forms */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white z-20">
        {children}
      </div>
      {/* Right Side - Background Image */}
      <div className="hidden md:flex w-1/2 h-full relative">
        <Image
          src="/gubh.png" 
          alt="GUB University"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl 2xl:text-5xl font-bold text-white">
            GUB Health Care
          </h1>
          <p className="text-blue-400 text-base mt-2">You're welcome</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
