import React, { useState } from "react";
import ProfileList from "../components/ProfileList";
import ProfileModal from "../components/ProfileModal";
import useProfiles from "../hooks/useProfiles";

const Home = () => {
  const { profiles, addProfile, deleteProfile, loading, error } = useProfiles();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Profiles</h2>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Profile
        </button>
      </div>

      <ProfileList profiles={profiles} loading={loading} error={error} onDelete={deleteProfile} />

      {openModal && (
        <ProfileModal onClose={() => setOpenModal(false)} onSave={addProfile} />
      )}
    </div>
  );
};

export default Home;
