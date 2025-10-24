import React from "react";

export default function ErrorState({ message }) {
  return (
    <div className="text-center text-red-500 mt-10 font-medium">
      ⚠️ {message}
    </div>
  );
}
