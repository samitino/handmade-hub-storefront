"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  const authenticate = async () => {
    try {
      await fetch(`/api/users`);
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
    </div>
  );
};

export default Page;
