import React from "react";

export default function ProfileModal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        {children}
        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}
