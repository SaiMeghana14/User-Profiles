import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-pulse">
      {Array(3)
        .fill()
        .map((_, i) => (
          <div key={i} className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg"></div>
        ))}
    </div>
  );
}
