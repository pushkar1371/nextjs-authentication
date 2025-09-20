"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.username);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center text-2xl font-bold">
            👤
          </div>
          <h1 className="mt-4 text-2xl font-bold">Profile</h1>
          <p className="text-gray-400">Your account details</p>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* User ID */}
        <div className="text-center">
          <h2 className="p-2 rounded bg-green-600 text-sm font-mono inline-block">
            {data === "nothing" ? (
              "Nothing"
            ) : (
              <Link href={`/profile/${data}`} className="hover:underline">
                {data}
              </Link>
            )}
          </h2>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Logout
          </button>

          <button
            onClick={getUserDetails}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Get User Details
          </button>
        </div>
      </div>
    </div>
  );
}
