import React, { useState, useEffect } from "react";
import Home from "./pages/Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return <Home darkMode={darkMode} setDarkMode={setDarkMode} />;
}
