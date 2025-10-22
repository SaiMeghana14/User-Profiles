import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 h-32 rounded-xl"></div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
