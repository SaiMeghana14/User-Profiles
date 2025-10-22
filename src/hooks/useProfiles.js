import { useEffect, useState } from "react";
import { getProfiles, saveProfiles } from "../services/profilesStorage";

const useProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const data = getProfiles();
        setProfiles(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  const addProfile = (profile) => {
    const updated = [...profiles, { ...profile, id: Date.now() }];
    setProfiles(updated);
    saveProfiles(updated);
  };

  const deleteProfile = (id) => {
    const updated = profiles.filter((p) => p.id !== id);
    setProfiles(updated);
    saveProfiles(updated);
  };

  return { profiles, addProfile, deleteProfile, loading, error };
};

export default useProfiles;
