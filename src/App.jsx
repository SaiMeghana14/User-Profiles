import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 text-center text-xl font-semibold">
        User Profiles Management
      </header>
      <Home />
    </div>
  );
};

export default App;
