import React from "react";

const ProfileCard = ({ profile, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <img
          src={profile.avatar || "https://via.placeholder.com/80"}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.email}</p>
        </div>
      </div>
      <button
        onClick={() => onDelete(profile.id)}
        className="mt-3 text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default ProfileCard;
