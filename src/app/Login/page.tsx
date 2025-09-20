"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful!");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">
        {loading ? "Processing..." : "Login"}
      </h1>

      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-md">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 
                     focus:outline-none focus:border-gray-600
                     bg-white text-black"
        />

        <label htmlFor="password" className="block mb-2 text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
          className="w-full p-2 border border-gray-300 rounded-lg mb-6 
                     focus:outline-none focus:border-gray-600
                     bg-white text-black"
        />

        <button
          onClick={onLogin}
          disabled={buttonDisabled}
          className={`w-full p-2 rounded-lg font-semibold transition 
          ${buttonDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {buttonDisabled ? "Fill all fields" : "Login"}
        </button>

        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}
