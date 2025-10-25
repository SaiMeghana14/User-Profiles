import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import placeholder from '../assets/placeholder.png';

export default function ProfileCard({ profile, onEdit, onDelete }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105">
      <img
        src={profile.image || placeholder}
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
      />
      <h2 className="text-xl font-semibold text-center">{profile.name}</h2>
      <p className="text-center text-gray-500 dark:text-gray-400">{profile.email}</p>
      <p className="text-center text-indigo-600 dark:text-indigo-400 font-medium">{profile.role}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => onEdit(profile)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => onDelete(profile.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
