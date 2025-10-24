import { useState, useEffect } from "react";
import { getProfiles, saveProfiles } from "../services/profilesStorage";
import toast from "react-hot-toast";

export default function useProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const saved = getProfiles();
      setProfiles(saved);
    } catch {
      setError("Failed to load profiles");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    saveProfiles(profiles);
  }, [profiles]);

  const addProfile = (p) => {
    const newProfile = { ...p, id: Date.now() };
    setProfiles([...profiles, newProfile]);
    toast.success("Profile added!");
  };

  const updateProfile = (updated) => {
    setProfiles(profiles.map((p) => (p.id === updated.id ? updated : p)));
    toast.success("Profile updated!");
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    toast.error("Profile deleted");
  };

  return { profiles, addProfile, updateProfile, deleteProfile, loading, error };
}
