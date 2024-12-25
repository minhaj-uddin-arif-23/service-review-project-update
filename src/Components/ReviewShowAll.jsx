import React from "react";
import { useAuth } from "../Hook/useAuth";

export default function ReviewShowAll({ data }) {
  const {user} = useAuth()
  return (
    <div className="card   shadow-md p-4 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="avatar">
          <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user?.displayName}</h2>
          <p className="text-sm text-gray-500">{data.rating} reviews • BD</p>
        </div>
      </div>

      <p className="text-lg font-semibold mb-2">{data.title}</p>
      <p>{data.text}</p>
      <p className="text-sm text-gray-500 mb-4">
        Date of experience: December 22, 2024
      </p>
    </div>
  );
}
