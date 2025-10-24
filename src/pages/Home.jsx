import React, { useState } from "react";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import ProfileList from "../components/ProfileList";
import ProfileForm from "../components/ProfileForm";
import useProfiles from "../hooks/useProfiles";

export default function Home({ darkMode, setDarkMode }) {
  const { profiles, addProfile, updateProfile, deleteProfile, loading, error } =
    useProfiles();
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);

  const filtered = profiles.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <header className="bg-indigo-600 dark:bg-indigo-800 text-white py-4 shadow-lg flex flex-col sm:flex-row items-center justify-between px-6">
        <h1 className="text-2xl font-bold mb-3 sm:mb-0">User Profiles</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white dark:bg-gray-700 rounded px-2 py-1">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 bg-transparent focus:outline-none text-black dark:text-white"
            />
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 bg-white dark:bg-gray-700 text-indigo-600 dark:text-yellow-300 p-2 rounded-full hover:scale-110 transition-transform"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      {/* Form */}
      <div className="container mx-auto px-4 mt-6">
        <ProfileForm
          onSubmit={(p) => {
            editing ? updateProfile(p) : addProfile(p);
            setEditing(null);
          }}
          editing={editing}
          cancelEdit={() => setEditing(null)}
        />
      </div>

      {/* Profile List */}
      <ProfileList
        profiles={filtered}
        loading={loading}
        error={error}
        onEdit={setEditing}
        onDelete={deleteProfile}
      />
    </div>
  );
}
