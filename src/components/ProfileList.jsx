import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorState from "./ErrorState";
import ProfileCard from "./ProfileCard";

export default function ProfileList({ profiles, loading, error, onEdit, onDelete }) {
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="container mx-auto px-4 mt-8">
      {!profiles.length ? (
        <p className="text-center text-gray-500">No profiles found. Add one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <ProfileCard
              key={p.id}
              profile={p}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
