import React from "react";
import ProfileCard from "./ProfileCard";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorState from "./ErrorState";

const ProfileList = ({ profiles, loading, error, onDelete }) => {
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState message="Failed to load profiles." />;
  if (profiles.length === 0)
    return <p className="text-center text-gray-600">No profiles yet.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {profiles.map((p) => (
        <ProfileCard key={p.id} profile={p} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProfileList;
