import React from "react";
import ProfileForm from "./ProfileForm";

const ProfileModal = ({ onClose, onSave }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Profile</h2>
        <ProfileForm onSave={onSave} onClose={onClose} />
      </div>
    </div>
  );
};

export default ProfileModal;
