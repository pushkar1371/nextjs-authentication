"use client";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-md">
          <h2 className="text-lg font-semibold mb-2">Users</h2>
          <p className="text-2xl">120</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-md">
          <h2 className="text-lg font-semibold mb-2">Orders</h2>
          <p className="text-2xl">45</p>
        </div>
      </div>
    </div>
  );
}
